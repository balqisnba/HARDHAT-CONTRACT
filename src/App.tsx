import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="container">
      <Button onClick={() => console.log("Clicked!")}>Login</Button>
      <Button onClick={() => console.log("Hahah")}>Register</Button>
      <Button onClick={() => console.log("Hahah")}>Vote</Button>
    </div>
  );
}

export default App;
