import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event) => {
    event.preventDefault();
    // Add token handling
    console.log("login clicked");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          username:{" "}
          <input
            type='text'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password:{" "}
          <input
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div>
          <button type='submit'>log in</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
