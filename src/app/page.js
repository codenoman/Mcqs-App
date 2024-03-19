"use client"


import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import "./index.css";

function App() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      
      {profile ? (
        <div className="container">
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
          <Link href="/simplequiz">
            <Button variant="outlined">Go to Mcqs</Button>
          </Link>
        </div>
      ) : (
        <div className="container">
          <h2>Login Here</h2>
          <form className="form">
            <Box sx={{ width: 500, maxWidth: '100%' }}>
              <TextField fullWidth id="email" name="email" type="email" label="Your Email or Phone Number" />
            </Box>
            <br />
            <br />
            <TextField label="Password" type="password" autoComplete="current-password" />
            <br /><br />
            <Button variant="outlined" type="submit">Login</Button>
            <br></br>
            <Button variant="outlined" onClick={() => login()}><GoogleIcon></GoogleIcon>login with Google</Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
