import React from "react";

const User = (props) => {
  console.warn(props.data);
  const { data } = props
  return (
    <div>
      <h1>user components</h1>
      <h4>{data.name} </h4>
      <h4>{data.age} </h4>
    </div>
  );
};

export default User;
