import { useQuery } from "@apollo/client";
import { useState } from "react";
import { BOOKS_BY_GENRE } from "../queries";

const Books = ({ books, genres }) => {
  const [genreChoice, setGenreChoice] = useState("");

  const { data, loading } = useQuery(BOOKS_BY_GENRE, {
    variables: { genre: genreChoice },
    skip: !genreChoice,
  });

  const booksTable = (booksToRender) => (
    <table>
      <thead>
        <tr>
          <th>Author</th>
          <th>Published</th>
        </tr>
      </thead>
      <tbody>
        {booksToRender.map((book) => (
          <tr key={book.title}>
            <td>{book.title}</td>
            <td>{book.author.name}</td>
            <td>{book.published}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderGenreButtons = () => (
    <div>
      {genres.map((genre) => (
        <button key={genre} type='button' onClick={() => setGenreChoice(genre)}>
          {genre}
        </button>
      ))}
      <button type='button' onClick={() => setGenreChoice("")}>
        Show All
      </button>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  const booksToShow = genreChoice && data ? data.booksByGenre : books;

  return (
    <div>
      <h2>Books</h2>
      {booksTable(booksToShow)}
      {renderGenreButtons()}
    </div>
  );
};

export default Books;
