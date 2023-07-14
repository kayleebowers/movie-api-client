import React from "react";
import { useState } from "react";

export const LoginView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    //prevent page from reloading on submit
    event.preventDefault();

    const data = {
      access: username,
      secret: password,
    };

    fetch("https://movies-app1-3d6bd65a6f09.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => {
        if (response.ok) {
            console.log(response);
        } else {
            alert("Login failed");
        }
    });
  };

  return (
    <>
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
    </>
  );
};
