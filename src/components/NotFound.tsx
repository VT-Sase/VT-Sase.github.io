import React from "react";
import { Link } from "react-router-dom";
const NotFound: React.FC = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Go To <Link to="/">Home Page</Link></p>
    </div>
  );
};

export default NotFound;
