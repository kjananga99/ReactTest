import logo from './logo.svg';
import './App.css';
function buttonClick(){
  console.log("Button is clicked");
  alert("Button is clicked")
}

function App() {

  return (
    <div>
      <h1>React Event Handling</h1>
      <br></br> <hr></hr>
      <button onClick = {buttonClick}> Click Here</button>
    </div>
  );
}

export default App;
