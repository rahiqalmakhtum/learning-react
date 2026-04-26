import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <p>No user data available.</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
};
export default Profile;
