//EXTERNAL STYLING
// React can import CSS files. The process is similar to how we link up CSS file in the HTML <head>:
//1. Create a new CSS file in your project directory.
//2. Write CSS.
//3. Import it into the React file.

import React from "react";
import './App.css';

const Box = () => (
  <div className="Box">
    <h3 className="Text_content"> External Styling React Components </h3>
    <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo" 
      />
    <p>React can import CSS files. The process is similar to how we link up CSS file in the HTML and is as follows:</p>
    <ol className="List">
      <li> Create a new CSS file in your project directory.</li>
      <li>Write CSS</li>
      <li>Import it into React File</li>
    </ol>
  </div>
);

export default Box;
