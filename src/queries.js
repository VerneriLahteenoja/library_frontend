import { gql } from "@apollo/client";

const AUTHOR_DETAILS = gql`
	fragment AuthorDetails on Author {
		name
		born
		id
		bookCount
	}
`

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      ...AuthorDetails
    }
  }
	${AUTHOR_DETAILS}
`;

export const ALL_BOOKS = gql`
	query {
		allBooks {
			title
			author {
				...AuthorDetails
			}
			published
			genres
		}
	}
  ${AUTHOR_DETAILS}
`;

export const ALL_GENRES = gql`
	query {
		allGenres
	}
`;

export const BOOKS_BY_GENRE = gql`
	query booksByGenre($genre: String!) {
		booksByGenre(genre: $genre) {
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