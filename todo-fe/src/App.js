import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoEditPage from "./pages/TodoEditPage/TodoEditPage";
import TodoPage from "./pages/TodoPage/TodoPage";

import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/todos" element={<TodoPage />} />
      <Route path="/edit" element={<TodoEditPage />}></Route>
    </Routes>
  );
}

export default App;
