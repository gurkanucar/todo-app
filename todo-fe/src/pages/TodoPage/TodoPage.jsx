import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { EditButton } from "../../components/EditButton/EditButton";
import TodoInputComponent from "../../components/TodoInputComponent/TodoInputComponent";
import TodoItem from "../../components/TodoItem/TodoItem";
import { GET_ALL_TODOS } from "../../queries/Query";
import { DELETE_TODO, UPDATE_TODO } from "../../queries/Mutation";
import "./TodoPage.css";
import { useNavigate } from "react-router";
import userObject from "../../userObject";

const TodoPage = () => {
  const navigate = useNavigate();

  const [getAllTodos, { data }] = useLazyQuery(GET_ALL_TODOS);
  const [deleteTodo, { data: deletedTodo }] = useMutation(DELETE_TODO);
  const [updateTodo, { data: updatedTodo }] = useMutation(UPDATE_TODO);

  const [searched, setSearched] = useState("");
  const [filterType, setFilterType] = useState();
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (userObject.id === undefined) {
      navigate("/");
    }
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate("/edit", {
        state: {
          todo: {
            task: searched,
          },
        },
      });
    }
  };

  const sendQuery = () => {
    getAllTodos({
      variables: { id: userObject?.id, completed: filterType },
    });
  };

  useEffect(() => {
    const todoData = data?.[Object.keys(data)[0]];
    setTodos(todoData);
    setFilteredTodos(todoData);
  }, [data]);

  useEffect(() => {
    sendQuery();
  }, [deletedTodo, updatedTodo, filterType]);

  const onClick = (val) => {
    setFilterType(val);
  };

  const onDeleteClick = (e) => {
    deleteTodo({ variables: { id: e } });
  };

  const handleCompleted = (e) => {
    //remove created field from object
    const { created, ...todo } = { ...todos.find((x) => x.id === e) };
    todo.completed = !todo.completed;
    updateTodo({
      variables: {
        todo,
      },
    });
  };

  const onEditClick = (e) => {
    const todo = todos.find((x) => x.id === e);
    console.log(todo);
    navigate("/edit", {
      state: {
        todo: todo,
      },
    });
  };

  useEffect(() => {
    if (searched !== "") {
      setFilteredTodos(todos.filter((x) => x.task.includes(searched)));
    } else {
      setFilteredTodos(todos);
    }
  }, [searched]);

  const onSearch = (val) => {
    setSearched(val);
  };

  return (
    <div>
      <TodoInputComponent onKeyDown={handleKeyDown} onSearch={onSearch} />

      <div className="todo-page-row">
        <EditButton
          icon="list"
          onClick={onClick}
          tag={undefined}
          selected={filterType === undefined}
        />
        <EditButton
          icon="check"
          onClick={onClick}
          tag={true}
          selected={filterType === true}
        />
        <EditButton
          icon="close"
          onClick={onClick}
          tag={false}
          selected={filterType === false}
        />
      </div>

      {filteredTodos?.map((todo) => {
        return (
          <div className="todo-page-row" key={todo.id}>
            <TodoItem todo={todo} onClick={handleCompleted} />
            <EditButton icon="edit" tag={todo.id} onClick={onEditClick} />
            <EditButton
              icon="delete"
              tag={todo.id}
              onClick={onDeleteClick}
              color="red"
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoPage;
