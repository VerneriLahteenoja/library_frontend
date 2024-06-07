import { useState } from "react";

const Books = ({ books, genres }) => {
  const [showBooks, setShowBooks] = useState([...books]);

  const handleGenreChoice = (genre) => {
    if (genre == "ALL_GENRES") {
      setShowBooks([...books]);
    } else {
      setShowBooks(books.filter((b) => b.genres.includes(genre)));
    }
  };

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {showBooks.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {genres.map((g) => (
          <button key={g} type='button' onClick={() => handleGenreChoice(g)}>
            {g}
          </button>
        ))}
        <button type='button' onClick={() => handleGenreChoice("ALL_GENRES")}>
          show all
        </button>
      </div>
    </div>
  );
};

export default Books;
