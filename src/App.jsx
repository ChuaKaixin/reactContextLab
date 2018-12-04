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
    return (
      <React.Fragment>
        <LoginContext.Provider value={this.state.authuser}>
          <Navbar />
          <main id="main">
            <section id="Login">
              <Login updateAuthUser={this.updateAuthUser} />
            </section>
            <section>
              <h3>Todolist</h3>
              <TodoContextProvider>
                <TodoContext.Consumer>
                  {context => (
                    <React.Fragment>
                      {/* <p>{context.todos[0].name}</p> */}
                      <Todos context={context} />
                    </React.Fragment>
                  )}
                </TodoContext.Consumer>
              </TodoContextProvider>
            </section>
          </main>
        </LoginContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
