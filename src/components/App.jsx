import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  console.log(time);
  const [timeDate, setTimeDate] = React.useState("Inicio");
  function getTime() {
    let time = new Date().toLocaleTimeString();
    console.log(time);
    setTimeDate(time);
    setInterval(getTime,1000);
  }
  return (
    <div className="container">
      <h1>{timeDate}</h1>
      <button onClick={getTime}>Get time</button>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [timeDate, setTimeDate] = useState("Inicio");

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const time = new Date().toLocaleTimeString();
//       setTimeDate(time);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="container">
//       <h1>{timeDate}</h1>
//     </div>
//   );
// }

// export default App;



//Challenge:
//1. Given that you can get the current time using:
let time = new Date().toLocaleTimeString();
console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
