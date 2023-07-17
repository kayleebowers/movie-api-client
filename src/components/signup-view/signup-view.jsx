import { useState } from "react";

export const SignUpView = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [birthday, setBirthday] = useState(null);

  const handleSignUp = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    }

    fetch("https://movies-app1-3d6bd65a6f09.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.ok) {
        alert("You are registered!");
      } else {
        alert("Something went wrong.");
      }
    })
  };

  return (
    <>
      <form onSubmit={handleSignUp}>
        <label>
          Username*
          <input
            type="text"
            required
            minLength={"5"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password*
          <input
            type="password"
            required
            minLength={"5"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Email*
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Birthday
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};
