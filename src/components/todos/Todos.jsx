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

// let [newTodo, setNewTodo] = useState("");
// let [todos, setTodos] = useState(props.todos);
// <form
// onSubmit={e => {
//   e.preventDefault();
//   setTodos([...todos, { name: newTodo, isCompleted: false }]);
//   setNewTodo("");
// }}
// >
// <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />

/* cannot put any elements outside of the consumer children brackets like this <input /> */
/* for more info on error above, https://github.com/facebook/react/issues/12241 */
