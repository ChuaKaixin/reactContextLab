import React from "React";

export const TodoContext = React.createContext([
  { name: "feed cat", isCompleted: false },
  { name: "research on Majorca", isCompleted: false }
]);
