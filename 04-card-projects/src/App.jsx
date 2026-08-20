// import Card from "./components/Card";
import User from "./components/User";

const App = () => {

  const arr = [10,20,30,40]

  return (
    <div className="parent">
       <User name={arr[0]}/>
       <User name={arr[1]}/>
    </div>
  );
};

export default App;
