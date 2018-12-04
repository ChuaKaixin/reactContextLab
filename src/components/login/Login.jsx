import React, { useState, useContext } from "react";
import { LoginContext } from "../contexts/loginContext";

export default function Login(props) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const authuser = useContext(LoginContext);
  return authuser.username !== "" ? (
    <p>You are logged in!</p>
  ) : (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.updateAuthUser({ username, password });
        setUsername("");
        setPassword("");
      }}
    >
      <label htmlFor="username">Username:</label>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
