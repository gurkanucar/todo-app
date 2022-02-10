import React, { useEffect, useState } from "react";
import ColorOption from "../../components/ColorOption/ColorOption";
import "./TodoEditPage.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "../../queries/Mutation";
import { useMutation } from "@apollo/client";

const TodoEditPage = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const [todo, setTodo] = useState(state?.todo);

  const [updateTodo, { data: data }] = useMutation(UPDATE_TODO);
  const [createTodo, { data: data2 }] = useMutation(CREATE_TODO);
  const [deleteTodo, { data: data3 }] = useMutation(DELETE_TODO);

  const [priorityType, setPriorityType] = useState("HIGH");

  const saveOperation = () => {
    if (todo.id === undefined) {
      createTodo({
        variables: {
          todo: {
            task: todo.task,
            priority: priorityType,
            user: {
              id: 1,
            },
          },
        },
      });
    } else {
      updateTodo({
        variables: {
          todo: {
            id: todo.id,
            task: todo.task,
            completed: todo.completed,
            priority: todo.priority,
          },
        },
      });
    }
    navigate("/");
  };

  const deleteOperation = () => {
    deleteTodo({
      variables: {
        id: todo.id,
      },
    });
    navigate("/");
  };

  const onClick = (val) => {
    setTodo({ ...todo, priority: val });
    setPriorityType(val);
  };

  useEffect(() => {
    if (todo.priority === "HIGH") {
      setPriorityType("HIGH");
    } else if (todo.priority === "MEDIUM") {
      setPriorityType("MEDIUM");
    } else if (todo.priority === "LOW") {
      setPriorityType("LOW");
    } else {
      setTodo({ ...todo, priority: "HIGH" });
    }
  }, [todo]);

  return (
    <div className="edit-page-div">
      <div className="div-todo-edit-input">
        <div className="row-todo-edit-input">
          <i className="material-icons">title</i>
          <input
            type="text"
            value={todo?.task}
            onChange={(e) => setTodo({ ...todo, task: e.target.value })}
            className="todo-edit-input"
            placeholder=" task..."
          />
        </div>
      </div>

      <div className="todo-edit-row">
        <ColorOption
          tag={"HIGH"}
          onClick={onClick}
          selected={priorityType == "HIGH"}
          color={"#ff2a2a"}
        />
        <ColorOption
          tag={"MEDIUM"}
          onClick={onClick}
          selected={priorityType == "MEDIUM"}
          color={"#ff9c2a"}
        />
        <ColorOption
          tag={"LOW"}
          onClick={onClick}
          selected={priorityType == "LOW"}
          color={"#ffea2a"}
        />
      </div>

      <div className="todo-edit-page-btn-div" onClick={saveOperation}>
        <div className="todo-edit-page-btn">
          <div className="button-hint">
            <i className="material-icons">save</i>
            Save
          </div>
        </div>
      </div>

      {state?.todo && (
        <div className="todo-edit-page-btn-div" onClick={deleteOperation}>
          <div
            className="todo-edit-page-btn"
            style={{ backgroundColor: "red", color: "white" }}
          >
            <div style={{ color: "white" }} className="button-hint">
              <i className="material-icons">delete</i>
              Delete
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoEditPage;
