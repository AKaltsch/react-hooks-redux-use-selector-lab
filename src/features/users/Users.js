import React from "react";
import { useSelector, useDispatch } from "react-redux";
// add any needed imports here

function Users() {

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();


  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {users.map((user) => (
          <li key={user.username}>username: {user.username}</li>
        ))}
        {/* In addition, display the total number of users curently in the store */}
        <p>Total Users: {users.length}</p>
      </ul>
    </div>
  );
}

export default Users;
