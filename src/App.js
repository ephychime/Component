// In-line style
export default function TodoList() {
  return (
    <div className="main" style={{backgroundColor : "blue", color : "white",textAlign : "center"}}>
      <h1 style={{color : "seagreen"}}>Inline Styling React Using CSS</h1>
      <p>There are various ways to style React with css.</p>
      <ul style={{listStyleType : "none", fontSize : "small"}}>
        <li>Inline styling</li>
        <li>CSS Stylesheets</li>
        
      </ul>
    </div>
  );
  }

// a better appraoch could be creating an object that contains styles for different elements.Then add it to an element using the style attribute and then select the property to style like:.
  
// import {React} from 'react'

// function Todolist() {
//   const styles = {
//     main: {
//       backgroundColor: "blue",
//       width: "100%",
//     },
//     headingText: {
//       padding: "10px",
//       color: "seagreen",
//     },
//     paraText:{

//     },
//     listingType:{
//       fontSize : "medium",
//       color : "white",
//       padding : "8px"
//     },
//   };
//   return (
//     <div style={styles.main}>
//       <h1 style={styles.headingText}>Styling React Using CSS</h1>
//       <p styles={styles.paraText}>There are various ways to style React with css.</p>
//       <ul style={styles.listingType}>
//         <li>Inline styling</li>
//         <li>CSS Stylesheets</li>
//       </ul>
//     </div>
//   );
// }

// export default TodoList ;

