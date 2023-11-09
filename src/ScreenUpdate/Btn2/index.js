import React, { useState } from 'react';

function ButtonToggle() {
  const [button1Enabled, setButton1Enabled] = useState(true);
  const [button2Enabled, setButton2Enabled] = useState(false);

  const handleButtonClick1 = () => {
    setButton1Enabled(false);
    setButton2Enabled(true);
  };

  const handleButtonClick2 = () => {
    setButton1Enabled(true);
    setButton2Enabled(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick1} disabled={!button1Enabled}>
        Button 1
      </button>
      <button onClick={handleButtonClick2} disabled={!button2Enabled}>
        Button 2
      </button>
    </div>
  );
}

export default ButtonToggle;
