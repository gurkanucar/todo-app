import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($user: CreateUser!) {
    createUser(user: $user) {
      id
      username
      name
    }
  }
`;

export const CREATE_TODO = gql`
  mutation createTodo($todo: CreateTodo!) {
    createTodo(todo: $todo) {
      id
      task
      completed
      created
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($todo: UpdateTodo!) {
    updateTodo(todo: $todo) {
      id
      task
      completed
      priority
    }
  }
`;

export const DELETE_TODO = gql`
  mutation delete($id: ID!) {
    delete(id: $id) {
      id
      task
      completed
      created
      priority
    }
  }
`;
