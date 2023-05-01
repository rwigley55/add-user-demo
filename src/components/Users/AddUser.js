import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    // By default, our custom component doesn't know what to do with "className" prop. Only react built default HTML components can accept this by default
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* "htmlFor" is the HTML prop equivalent for "for" on label accessibility */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
