// import React, { useState } from 'react';


function Button1() {
  const handleClick = () => {
    alert(' Button 1-I got clicked');
  };

  return (
    // <button onClick={handleClick}>Button 1</button>
    <button onClick={() => handleClick("")} style={{pamargin:"20px"}}>Button </button>
  );
}

export default Button1;


