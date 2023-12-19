import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./Home.module.css";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
    console.log(todos);
  };
  const handleRemove = (id) => {
    setTodos((preveiousTodos) => {
      const filterdTodos = preveiousTodos.filter((todo) => todo.id !== id);
      return filterdTodos;
    });
  };
  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemove} />
    </div>
  );
};

export default Home;
