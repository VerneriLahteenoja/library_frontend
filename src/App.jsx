import { useState } from "react";
import { useQuery } from "@apollo/client";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import { ALL_AUTHORS, ALL_BOOKS } from "./queries";

const App = () => {
  const [page, setPage] = useState("authors");

  const result = useQuery(ALL_AUTHORS, {
    pollInterval: 2000,
  });
  const booksQuery = useQuery(ALL_BOOKS, {
    pollInterval: 2000,
  });

  if (result.loading || booksQuery.loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
      </div>
      {page === "authors" && <Authors authors={result.data.allAuthors} />}

      {page === "books" && <Books books={booksQuery.data.allBooks} />}

      {page === "add" && <NewBook />}
    </div>
  );
};

export default App;
