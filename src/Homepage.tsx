import "./App.css";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="heading-container">
        <h1 className="main-title">Welcome to the Voting Portal!</h1>
        <p className="sub-title">Please choose an option below to proceed.</p>
      </div>

      <div className="button-container">
        <Button
          text="Register"
          onClick={() => navigate("/register")}
          className="btn-register"
        />
        <Button
          text="Login"
          onClick={() => navigate("/login")}
          className="btn-login"
        />
      </div>
    </div>
  );
}

export default App;
