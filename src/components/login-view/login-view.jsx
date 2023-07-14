import React from "react";

export const LoginView = () => {
  return (
    <>
        <form>
            <label>
                Username
                <input type="text" required minLength={"5"}/>
                <input type="password" required/>
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </>
  );
};
