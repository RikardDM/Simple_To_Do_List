import React from "react";
import Task from "../Task/Task";

const List = ({ list, deleteItem }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <Task item={item} index={index} key={index} deleteItem={deleteItem} />
      ))}
    </ul>
  );
};

export default List;
