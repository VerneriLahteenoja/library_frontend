import { useState } from "react";
import { useMutation } from "@apollo/client";
import Select from "react-select";
import { UPDATE_AUTHOR } from "../queries";

const Authors = ({ authors }) => {
  const [name, setName] = useState(null);
  const [born, setBorn] = useState("");

  const [changeBorn] = useMutation(UPDATE_AUTHOR);

  const submit = (event) => {
    event.preventDefault();
    changeBorn({ variables: { name, born: Number(born) } });
    setName(null);
    setBorn("");
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
          <Select
            defaultValue={name}
            onChange={(choice) => setName(choice.value)}
            options={authors.map((a) => {
              return { value: a.name, label: a.name };
            })}
          />
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
