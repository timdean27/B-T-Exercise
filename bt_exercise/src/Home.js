import React from 'react';
import Header from './Components/Header';

const Home = ({ currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      Home
    </div>
  );
};

export default Home;
