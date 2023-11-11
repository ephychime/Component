//Creating  a component
//We can see that function name is profile and will return the image 
// export default function Profile() {
//   // return (
//     return (
//       <div>
//         <h1>Hello, React users!</h1>
//         <img
//       src="https://i.imgur.com/MK3eW3Am.jpg"
//       alt="Katherine Johnson" />
//       </div>
//     );
// }

//NESTING COMPONENTS
//in this example, we have a parent component (User) that nests a child component (Userdetails). 
// The child component is responsible for rendering a simple header.

import Counter from "./Statecounter/statescreen";

function App() {
  return (
    <div>
  
      <Counter />
    </div>
  );
}

export default App;




