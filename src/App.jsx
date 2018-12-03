import React, { Component } from "react";
import "./App.css";
import Todos from "./components/todos/Todos";
import Login from "./components/login/Login";
import TodoContextProvider, {
  TodoContext
} from "./components/contexts/todoContext";

class App extends Component {
  render() {
    return [
      <nav className="header" key="nav">
        <a href="#main" onClick={this.onClick}>
          Todos
        </a>
        <a>Login</a>
      </nav>,
      <main key="main" id="main">
        <section>
          <Login />
        </section>
        <section>
          <h3>Todolist</h3>
          <TodoContextProvider>
            <TodoContext.Consumer>
              {context => <Todos context={context} />}
            </TodoContext.Consumer>
          </TodoContextProvider>
        </section>
      </main>
    ];
  }
}

export default App;
