// //EXTERNAL STYLING
// // React can import CSS files. The process is similar to how we link up CSS file in the HTML <head>:
// //1. Create a new CSS file in your project directory.
// //2. Write CSS.
// //3. Import it into the React file.

// import React from "react";
// import './App.css';

// const Box = () => (
//   <div className="Box">
//     <h3 className="Text_content"> External Styling React Components </h3>
//     <img 
//         src="https://i.imgur.com/yXOvdOSs.jpg" 
//         alt="Hedy Lamarr" 
//         className="photo" 
//       / className="image">
//     <p>React can import CSS files. The process is similar to how we link up CSS file in the HTML and is as follows:</p>
//     <ol className="List">
//       <li> Create a new CSS file in your project directory.</li>
//       <li>Write CSS</li>
//       <li>Import it into React File</li>
//     </ol>
//   </div>
// );

// export default Box;


// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//     />
//   );
// }

// export default function Profile() {
//   const name = "Jennifer"
//   return (
//     <div style={{textAlign : "center", color : "red"}}>
//       {name}
//     </div>
//   );
// }


//Creating Props
// The function componets will considt of the properties after then you create a component that pass (props) in order to return the data in UI

import React from "react";
import './App.css';

function User (){
  return (
<div>
<Profile firstName="Jennier" lastName="Anajuru" age="25" hobbies="cooking, travelling, singing" address="Egbeda-Owerri" favFood="Okro Soup"/>
{/* <Profile firstName="Jennier" lastName="Anajuru" age="25" hobbies="cooking, travelling, singing" address="Egbeda-Owerri" favFood="Okro Soup"/> */}

</div>
  );
}
const Profile = (props)=>{
  return (
    <div>
    <h1>This is a profile of a girl from the Eastern part of Nigeria.</h1>
    <ul>
    <li>{props.firstName}</li>
    <li>{props.lastName}</li>
    <li>{props.hobbies}</li>
    <li>{props.address}</li>
    <li>{props.favFood}</li>
    </ul>
    
    </div>
  )
}
export default User;