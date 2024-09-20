import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const { name, location, contact } = props;
  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h5>Contact: {contact}</h5>
    </div>
  );
};

export default User;
