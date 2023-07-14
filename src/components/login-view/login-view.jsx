import React from "react";

export const LoginView = () => {
    const handleSubmit = () => {

    }
  return (
    <>
        <form>
            <label>
                Username
                <input type="text" required minLength={"5"}/>
            </label>
            <label>
                Password
                <input type="password" required/>
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </>
  );
};
