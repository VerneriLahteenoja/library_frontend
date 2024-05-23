import { useState } from "react";

const Authors = ({ authors }) => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");

  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Set birthyear</h3>
      <div>
        <form onSubmit={submit}>
          name
          <input
            type='text'
            value={name}
            onChange={({ target }) => setName(target.value)}
          ></input>
          <br />
          born
          <input
            type='number'
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          ></input>
          <br />
          <button type='submit'>update author</button>
        </form>
      </div>
    </div>
  );
};

export default Authors;
