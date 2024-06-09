import { gql } from "@apollo/client";

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      id
      bookCount
    }
  }
`;

export const ALL_BOOKS = gql`
	query {
		allBooks {
			title
			author {
				name
				born
			}
			published
			genres
		}
	}
`;

export const ALL_GENRES = gql`
	query {
		allGenres
	}
`;

export const CURRENT_USER = gql`
	query {
		me {
			username
			favoriteGenre
			id
		}
	} 
`;

export const CURRENT_USER_FAVORITE_BOOKS = gql`
	query {
		favoriteBooks {
			title
			author {
				name
				born
			}
			published
			genres
		}
	}
`;

export const ADD_BOOK = gql`
	mutation createBook($title: String!, $published: Int!, $author: String!, $genres: [String!]!)
	{
		addBook(
			title: $title,
			published: $published,
			author: $author,
			genres: $genres
		) {
			title,
			published,
			author {
				name
			},
			genres
		}
	}
`;

export const UPDATE_AUTHOR = gql`
	mutation updateAuthor($name: String!, $born: Int!)
	{
		editAuthor(
			name: $name,
			setBornTo: $born
		) {
			name,
			born
		}
	}
`;

export const LOGIN = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			value
		}
	}
`;