import { useEffect, useState } from "react";
import { useApolloClient, useQuery } from "@apollo/client";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import LoginForm from "./components/LoginForm";
import { ALL_AUTHORS, ALL_BOOKS } from "./queries";

const App = () => {
  const [page, setPage] = useState("authors");
  const [token, setToken] = useState(null);

  const result = useQuery(ALL_AUTHORS, {
    pollInterval: 2000,
  });
  const booksQuery = useQuery(ALL_BOOKS, {
    pollInterval: 2000,
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem("logged-in-user-token");
    if (loggedIn) {
      setToken(loggedIn);
    }
  }, []);

  const client = useApolloClient();

  const logout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  };

  if (result.loading || booksQuery.loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
        {!token ? (
          <button onClick={() => setPage("login")}>login</button>
        ) : (
          <button onClick={() => logout()}>log out</button>
        )}
      </div>
      {page === "authors" && (
        <Authors authors={result.data.allAuthors} setPage={setPage} />
      )}

      {page === "books" && <Books books={booksQuery.data.allBooks} />}

      {page === "add" && <NewBook setPage={setPage} />}

      {page === "login" && <LoginForm setPage={setPage} setToken={setToken} />}
    </div>
  );
};

export default App;
