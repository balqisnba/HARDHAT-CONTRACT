import "./App.css";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Button
        text="Register"
        onClick={() => navigate("/register")}
        className="btn-primary"
      />
      <Button
        text="Login"
        onClick={() => navigate("/login")}
        className="btn-primary"
      />
    </div>
  );
}

export default App;
