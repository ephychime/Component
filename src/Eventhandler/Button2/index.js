function Button2() {
    const handleClick = () => {
      alert(' Button 2-I got clicked');
    };
  
    return (
      // <button onClick={handleClick}>Button 1</button>
      <button onClick={() => handleClick("")}>Button</button>
    );
  }
  
  export default Button2;
  
  