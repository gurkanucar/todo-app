import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoEditPage from "./pages/TodoEditPage/TodoEditPage";
import TodoPage from "./pages/TodoPage/TodoPage";

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/todo" element={<TodoEditPage />}>
      </Route>
    </Routes>
  );
}

export default App;
