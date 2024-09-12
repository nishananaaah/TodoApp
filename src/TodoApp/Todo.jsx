import React from "react";
import Addtask from "./Addtask";
import Listtask from "./Listtask";

const Todo = () => {
  return (
    <div>
      <div>TODO APP</div>
      <div>
        <Addtask />
      </div>
      <div><Listtask/></div>
    </div>
  );
};

export default Todo;
