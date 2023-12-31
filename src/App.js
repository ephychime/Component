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

// parent component
function User() {
  return (
    <>
    <h3>I may have forgotten my password</h3>
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    /> 
    </>
    
  );
}
// child component
export default function Userdetails() {
  return (
    <section>
      <h1>My username is Kathy.j</h1>
      {/* <h3>I may have forgotten my password</h3> */}
      <User />
      <User />
      <User />

    </section>
  );
}



