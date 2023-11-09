//Two button with onClick Handlers 
import React from "react";
import Button1 from "./EventHandler/Button1";
import Button2 from "./EventHandler/Button1/Button2";

function App() {
  return (
    <div className='render' style={{border:"2px solid red", width:"100px", padding:"10px"}}>
      <Button1 />
      <Button2 />
    </div>
  );
}

export default App;






