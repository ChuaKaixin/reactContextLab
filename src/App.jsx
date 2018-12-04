import React, { Component } from "react";
import "./App.css";
import Todos from "./components/todos/Todos";
import Login from "./components/login/Login";
import TodoContextProvider, {
  TodoContext
} from "./components/contexts/todoContext";
import Navbar from "./components/navbar/Navbar";
import { LoginContext } from "./components/contexts/loginContext";

class App extends Component {
  state = { authuser: { username: "", password: "" } };
  updateAuthUser = authuser => {
    this.setState({ authuser });
  };
  render() {
    return [
      <LoginContext.Provider value={this.state.authuser}>
        ,<Navbar />,
        <main key="main" id="main">
          <section id="Login">
            <Login updateAuthUser={this.updateAuthUser} />
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
        ,
      </LoginContext.Provider>
    ];
  }
}

export default App;
