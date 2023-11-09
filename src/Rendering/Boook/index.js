// import React from "react";
// const Bookinfo = ({bookcontent}) => {
//     return(
//     <div>
//         <h1>This is to check if the book Title exits</h1>
//         <p>{bookcontent.bookIsbn}</p>
//         <p>{bookcontent.bookYear}</p>
//         <p>{bookcontent.numberOfPages}</p>
//         {bookcontent.bookTitle || <p>Default Title</p>}
//     </div>
//     );
    
//     }


import React from "react";
const  Bookinfo =  ({ bookcontent }) => {
      return (
        <div>
          <h2>User Information</h2>
          <p>Title: {bookcontent.bookTitle || 'Default Title'}</p>
        </div>
      );
    }
    export default Bookinfo;
    

