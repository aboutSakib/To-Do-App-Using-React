import React from "react";
import Todo from "./Todo";
import style from "./Todos.module.css";

const Todos = (props) => {
  
  return (
    <section className={style.todos}>
      {props.todos.map((todo) => {
        return <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveItem={props.onRemoveTodo} />;
      })}
    </section>
  );
};

export default Todos;
