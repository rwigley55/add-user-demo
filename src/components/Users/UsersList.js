import React from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {/* 'users' is an array of objects, where every object has a 'name' prop and an 'age' prop */}
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
