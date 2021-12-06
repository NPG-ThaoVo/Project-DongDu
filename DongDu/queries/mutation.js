import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation CreateUser($username: String, $password: String, $email: String) {
    createUser(
      data: { username: $username, password: $password, email: $email }
    ) {
      id
      username
      email
    }
  }
`;
