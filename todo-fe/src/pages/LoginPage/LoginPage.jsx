import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CREATE_USER } from "../../queries/Mutation";
import { GET_USER_BY_USERNAME } from "../../queries/Query";
import userObject from "../../userObject";
import "./LoginPage.css";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [createUser, { data: createUserData, error: createUserError }] =
    useMutation(CREATE_USER);
  const [getUser, { data: getUserData, error: getUserError }] =
    useLazyQuery(GET_USER_BY_USERNAME);

  const navigate = useNavigate();

  const login = () => {
    getUser({
      variables: {
        username: username,
      },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  useEffect(() => {
    const user = getUserData?.[Object.keys(getUserData)[0]];
    if (user !== undefined && user?.id !== undefined && user?.id !== null) {
      userObject.id = user?.id;
      userObject.username = user?.username;
      navigate("/todos");
    } else if (username !== "") {
      createUser({
        variables: {
          user: { username: username, name: username },
        },
      });
    }
  }, [getUserData]);

  useEffect(() => {
    const user = createUserData?.[Object.keys(createUserData)[0]];
    if (user !== undefined) {
      userObject.id = user.id;
      userObject.username = user.username;
      navigate("/todos");
    }
    console.log(user);
  }, [createUserData]);

  return (
    <div className="login-root-div">
      <h2 className="login-title">Todo App</h2>

      <div className="div-login-input">
        <div className="row-login-input">
          <i className="material-icons">person</i>
          <input
            onKeyDown={(e) => handleKeyDown(e)}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            placeholder=" username..."
          />
        </div>
      </div>

      <div className="login-page-btn-div" onClick={() => login()}>
        <div className="login-page-btn">
          <div className="button-hint">
            <i className="material-icons">login</i>
            Enter
          </div>
        </div>
      </div>

      {/* {getUserError && <div>{getUserError.message}</div>} */}

      <div
        className="demo"
        onClick={() => {
          window.open("https://github.com/gurkanucar", "_blank");
        }}
      >
        <i className="material-icons">code</i>
        github.com/gurkanucar
      </div>
    </div>
  );
};

export default LoginPage;
