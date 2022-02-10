import { gql } from "@apollo/client";


export const GET_ALL_TODOS = gql`
  query getAllTodos($id: ID!, $completed: Boolean) {
    getAllTodos(id: $id, completed: $completed) {
      id
      task
      completed
      priority
      created
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      username
    }
  }
`;
