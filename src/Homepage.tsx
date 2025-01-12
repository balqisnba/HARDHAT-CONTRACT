import "./App.css";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Button onClick={() => navigate("/register")}>Register</Button>
      <Button onClick={() => navigate("/login")}>Login</Button>
      <Button onClick={() => navigate("/vote")}>Vote</Button>
    </div>
  );
}

export default App;
