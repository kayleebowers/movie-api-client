import React from "react";

export const LoginView = () => {
    const handleSubmit = (event) => {
        //prevent page from reloading on submit
        event.preventDefault();

        const data = {
            access: Username,
            secret: Password
        }

        fetch("https://movies-app1-3d6bd65a6f09.herokuapp.com/login", {
            method: "POST",
            body: JSON.stringify(data)
        })
        // .then((response) => {
            
        // })

    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input type="text" required minLength={"5"}/>
            </label>
            <label>
                Password
                <input type="password" required/>
            </label>
            <button type="submit">Submit</button>
        </form>
    </>
  );
};
