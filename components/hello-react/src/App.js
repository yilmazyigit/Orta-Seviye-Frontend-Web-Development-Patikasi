import React from 'react';
import './App.css';


const name = "Yigit";
const surname = "Yilmaz";
const isLoggedIn = false;
function App() {

  // return React.createElement("div", null, "Hello")

  return(
    <>
      {/* <h1>{ isLoggedIn && ` Benim adım ${name}, soyadım ${surname}`}</h1>

      { !isLoggedIn && "Giriş yapmadınız."} */}


      <h1> {isLoggedIn
        ? ` Benim adım ${name}, soyadım ${surname}`
        : "Giriş yapmadınız"}
        </h1>
    </>
  );
}

export default App;