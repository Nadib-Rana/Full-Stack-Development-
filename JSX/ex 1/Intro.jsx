import React from 'react';  // Import React to create the component

import './intro.css';  // Import the CSS file for styling this component

// Define the Home component, which is the main part of this file
function Home() {
  return (
    <div className="App">  {/* Main container for the component */}
      <h1>Hello Man</h1>  {/* Header for greeting */}
      <h3>Welcome to my React app.</h3>  {/* Subtitle or introduction text */}

      <div className="test">  {/* A div with custom CSS class for additional text */}
        Are you agree with React? It is the best framework of JavaScript
      </div>

      {/* Buttons for user interaction with unique styling from 'intro.css' */}
      <button className='btn_agree'>Yes</button>
      <button className='btn_agree'>No</button>
    </div>
  );
}

export default Home;  
// Export the Home component so it can be imported and used in other files
