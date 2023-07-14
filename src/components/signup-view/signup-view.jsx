export const SignUpView = () => {
  const handleSignUp = () => {};

  return (
    <>
      <form onSubmit={handleSignUp}>
        <div>
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
        </div>
      </form>
    </>
  );
};
