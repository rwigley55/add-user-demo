import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
        //A blank return statment will stop the rest of the function from execution
        return;
    }
    //Should work, but you are comparing a string to a number (useState initialized the input to a string)
    //the + converts the string back to a number
    if(+enteredAge < 1) {
        return;
    }
    // console.log(enteredUsername, enteredAge);
    // Forwarding the enteredUsername and enteredAge to the App component (where the AddUser componenet is being used)
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    // By default, our custom component doesn't know what to do with "className" prop. Only react built default HTML components can accept this by default
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* "htmlFor" is the HTML prop equivalent for "for" on label accessibility */}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
