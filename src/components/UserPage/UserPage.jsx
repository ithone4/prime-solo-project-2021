import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <p>Your ID is: {user.id}</p>
      <h2>Thank you {user.username} for registering to Grandma Died.</h2>
      <p>We will be sending the excuse by text to the number provied: <h2>{user.cell}</h2> </p>
      <p>Triple check that number. We don't want to text the wrong person.</p>

    <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
