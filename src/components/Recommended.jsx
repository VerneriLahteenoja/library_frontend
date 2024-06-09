import { useQuery } from "@apollo/client";
import { CURRENT_USER_FAVORITE_BOOKS, CURRENT_USER } from "../queries";

const Recommended = () => {
  const favoriteBookQuery = useQuery(CURRENT_USER_FAVORITE_BOOKS);
  const currentUserQuery = useQuery(CURRENT_USER);

  if (favoriteBookQuery.loading || currentUserQuery.loading) {
    return <div>...loading</div>;
  }

  const favoriteGenreBooks = favoriteBookQuery.data.favoriteBooks;

  return (
    <div>
      <h2>recommendations</h2>
      <br />
      <span>
        books in your favorite genre {currentUserQuery.data.me.favoriteGenre}
      </span>
      <br />
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {favoriteGenreBooks.map((b) => (
            <tr key={b.title}>
              <td>{b.title}</td>
              <td>{b.author.name}</td>
              <td>{b.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recommended;
