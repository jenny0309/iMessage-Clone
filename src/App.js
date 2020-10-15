import React, { useEffect } from 'react';
import './App.css';
import { selectUser, login, logout } from './features/userSlice';
import Imessage from './Imessage';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

function App() {
  // Redux: state management tool <- let components access states through data layer(manipulate "global" state)
  const user = useSelector(selectUser) // get data from reducer(userSlice)
  const dispatch = useDispatch() // get actions

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // user is logged in <- pass payload object
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {user ? (
        <Imessage />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
