import React, { Component } from "react";

export const TodoContext = React.createContext();

class TodoContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { name: "feed cat", isCompleted: false },
        { name: "research on Majorca", isCompleted: false }
      ],
      newTodo: "",
      addTodos: this.addTodos,
      inputOnChangeHandler: this.inputOnChangeHandler
    };
  }

  addTodos = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { name: this.state.newTodo, isCompleted: false }
      ],
      newTodo: ""
    });
  };
  inputOnChangeHandler = e => {
    this.setState({ newTodo: e.target.value });
  };
  render() {
    return (
      <TodoContext.Provider value={this.state}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export default TodoContextProvider;

// Alternatively, use
// this.addTodos = this.addTodos.bind(this);
// this.inputOnChangeHandler = this.inputOnChangeHandler.bind(this);
