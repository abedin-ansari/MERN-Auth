import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-2">
      <h1>Welcome to the Home Page!</h1>
      <h4>
        If you don't have an account, you can&nbsp;
        <Link to="/register">register here</Link>.
      </h4>
      <h4>
        If you already have an account, you can&nbsp;
        <Link to="/login">login here</Link>.
      </h4>
    </div>
  );
}

export default Home;
