import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    //prevent page from reloading on submit
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    //get header with user info and JWT from API
    fetch("https://movies-app1-3d6bd65a6f09.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      //return header with JWT 
      .then((response) => {
        return response.json();
      })
      //pass user and token to MainView
      .then((data) => {
        console.log("Login response: " + data);
        if (data.user) {
          onLoggedIn(data.user, data.token);
        } else {
          alert("User does not exist");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          required
          minLength={"5"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
