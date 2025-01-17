import "./interface.css";
import Button from "./components/Button";
import {useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="image-container">
        {/* Left Image Section */}
        <div className="image-container">
          <img src="/src/assets/seventeen.png" alt="Placeholder" className="left-image" />
        </div>

        {/* Right Content Section */}
        <div className="text-button-container">
          <h1 className="main-title">WELCOME TO VOTING PORTAL</h1>
          <p className="sub-title">Please choose an option below to proceed.</p>
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
      </div>
    </div>
  );
};

export default App;
