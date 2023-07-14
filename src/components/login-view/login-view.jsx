import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (event) => {
    //prevent page from reloading on submit
    event.preventDefault();

    const data = {
      Username: Username,
      Password: Password,
    };

    fetch(
      `https://movies-app1-3d6bd65a6f09.herokuapp.com/login?Username=${Username}&Password=${Password}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        response.json();
      })
      .then((data) => {
        if (response.ok) {
          onLoggedIn(Username);
          console.log("Login response: " + data);
        } else {
          alert("Login failed");
        }
      });
    // .catch((e) => {
    //     alert("Something went wrong");
    //   });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          required
          minLength={"5"}
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          required
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
