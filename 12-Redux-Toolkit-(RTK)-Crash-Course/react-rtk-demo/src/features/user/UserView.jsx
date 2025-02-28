import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

function UserView() {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.user);
  // console.log(userState);

  return (
    <>
      <h2>List of Users:</h2>
      <button onClick={() => dispatch(fetchUsers())}>Show users</button>

      {userState.loading ? <h4>Loading...</h4> : ""}

      {userState.error ? <p style={{ color: "red" }}>Error: {userState.error}</p> : ""}

      {userState.users.map((user) => {
        return <p key={user}>{user}</p>;
      })}
    </>
  );
}

export default UserView;
