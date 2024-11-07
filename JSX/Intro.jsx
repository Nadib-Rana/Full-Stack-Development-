import React from 'react';

import './home.css';

function Home() {  // Ensure the function name is 'Home' with a capital H
  return (
    <div className="App">
      <h1>Hello Man</h1>
      <h3>Welcome to my React app.</h3>
     <div className="test">
      Are you agree with the React , It is the best freamwork of Javascript
      </div>
      <button className='btn_agree'>Yes</button>
      <button className='btn_agree'>No</button>
    </div>
  );
}

export default Home;  // Export 'Home', matching the function name exactly

