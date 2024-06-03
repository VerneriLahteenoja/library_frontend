import { useEffect, useState } from "react";
import { LOGIN } from "../queries";
import { useMutation } from "@apollo/client";

const LoginForm = ({ setToken, setPage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    },
  });

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value;
      setToken(token);
      localStorage.setItem("logged-in-user-token", token);
      setPage("authors");
    }
  }, [result.data]);

  const submit = async (event) => {
    event.preventDefault();

    login({ variables: { username, password } });
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
