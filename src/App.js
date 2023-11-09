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
// The function componets will consist of the properties after then you create a component that pass (props) in order to return the data in UI

// import React from "react";
// import './App.css';

// function User (){
//   return (
// <div>
// <Profile firstName="Jennier" lastName="Anajuru" age="25" hobbies="cooking, travelling, singing" address="Egbeda-Owerri" favFood="Okro Soup"/>
// {/* <Profile firstName="Jennier" lastName="Anajuru" age="25" hobbies="cooking, travelling, singing" address="Egbeda-Owerri" favFood="Okro Soup"/> */}

// </div>
//   );
// }
// const Profile = (props)=>{
//   return (
//     <div>
//     <h1>This is a profile of a girl from the Eastern part of Nigeria.</h1>
//     <ul>
//     <li>{props.firstName}</li>
//     <li>{props.lastName}</li>
//     <li>{props.hobbies}</li>
//     <li>{props.address}</li>
//     <li>{props.favFood}</li>
//     </ul>
    
//     </div>
//   )
// }
// export default User;

//Passing an entire object as a prop to a component

// function Person({info}) { 
//   return (
//     <div>
//       <h2>{info.firstName}</h2>
//       <h2>{info.lastName}</h2>
//       <h2>{info.age}</h2>
//       {/* <h2>{info.hobbies}</h2> */}
//       {/* <h2>{info.country}</h2> */}
//       <h2>{info.address}</h2>
//       <h2>{info.favFood}</h2>
//     </div>
//   );
// }

// export default function App() {
//   const user = {firstName: 'Esther',
//   lastName: 'Obangu',
//   age: 20,
//   hobbies: ['watchingTiktok,', 'Travelling,',  'looking good,'],
//   address: '30 Blooms Road',
// imageURL: "",
//   favFood: 'Afang soup'};



//   return (
//     <div>
//       <Person info={user} />
//     </div>
//   );
// }


// import React from 'react';

// const UserComponent = ({ user }) => {
//   if (!user || !user.imageUrl) {
//     return null; // Return nothing if there's no user or no image URL
//   }

//   return (
//     <div>
//       <h2>{user.name}</h2>
//       <img src={user.imageUrl} alt={user.name} />
//     </div>
//   );
// };

// export default UserComponent;
// import './App.css'

// function App(){
//   const age = {
//     Image: "",
//   };

//   return (
//     <div>
//       {age >= image ? <h1>True</h1> : <h2>Opps!!</h2>}
//     </div>
//   )

// }
// export default App;


//We first had to initialize it, and we then needed to access the props and what kind of property it holds.

// import User from "./ConditionRendering/User";

//Then,rendered components consume those properties and pass data into them.
//   export default function App() {
//     const user = {firstName: 'Esther',
//   lastName: 'Obangu',
//   age: 20,
//   hobbies: ['watchingTiktok,', 'Travelling,',  'looking good,'],
//   address: '30 Blooms Road',
// imageURL: "",
//   favFood: 'Afang soup'};
//     return (
//       <div className="App">
        
//         <User userdetails={user} />
//       </div>
//     );
//   }
   
  // import MyProducts from "./ConditionRendering/User";

// export default function App() {
//   const user = {firstName: 'Esther',
//   lastName: 'Obangu',
//   age: 20,
//   hobbies: ['watchingTiktok,', 'Travelling,',  'looking good,'],
//   address: '30 Blooms Road',
// imageURL: "",
//   favFood: 'Afang soup'};

//   return (
//     <div className="App">
//       <MyProducts props={user} />
//     </div>
//   );
// }
 


import React from 'react';
import Counter from './ConditionRendering/Countercomponents';



function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;















