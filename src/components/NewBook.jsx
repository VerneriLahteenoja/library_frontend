import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../queries";

const NewBook = ({ setPage }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState([]);

  const [createBook] = useMutation(ADD_BOOK);

  const submit = async (event) => {
    event.preventDefault();

    console.log("add book...");

    createBook({
      variables: { title, published: Number(published), author, genres },
    });

    setTitle("");
    setPublished("");
    setAuthor("");
    setGenres([]);
    setGenre("");
  };

  const addGenre = () => {
    setGenres(genres.concat(genre));
    setGenre("");
  };

  const loggedIn = localStorage.getItem("logged-in-user-token");

  if (!loggedIn) {
    return (
      <div>
        Log in to add books
        <button type='button' onClick={() => setPage("login")}>
          login
        </button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          published
          <input
            type='number'
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div>
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          <button onClick={addGenre} type='button'>
            add genre
          </button>
        </div>
        <div>genres: {genres.join(" ")}</div>
        <button type='submit'>create book</button>
      </form>
    </div>
  );
};

export default NewBook;
