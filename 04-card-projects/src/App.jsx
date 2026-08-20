// import Card from "./components/Card";
import User from "./components/User";

const App = () => {
  const obj = [
    { 
      user: "Ayush",
      age: 23
     },
    { 
      user: "Akash",
      age: 20
     },
    { 
      user: "Sarthak",
      age: 29
     }
    ];

  console.log(obj[0].user);

  return (
    <div className="parent">
      {/* {arr.map((elem) => {
        console.log(elem);
      })} */}
    </div>
  );
};

export default App;
