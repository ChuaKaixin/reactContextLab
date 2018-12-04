import React from "react";

const Todos = props => {
  const { todos, newTodo, addTodos, inputOnChangeHandler } = props.context;
  return (
    <React.Fragment>
      {todos.map(todo => (
        <p key={todo.name}>{todo.name}</p>
      ))}
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodos();
        }}
      >
        <input value={newTodo} onChange={e => inputOnChangeHandler(e)} />
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
};

export default Todos;
