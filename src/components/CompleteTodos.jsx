import React from "react";

const style = {
  backgroundColor: "#A7C4BC",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={style} className="complete-area">
      <p className="title">DONE</p>
      <div>
        {todos.map((todo, index) => {
          return (
            <ul className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
