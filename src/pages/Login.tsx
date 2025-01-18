import React, { useState } from "react";
import Web3 from "web3";
import metamaskIcon from "../assets/MetaMask_Fox.png";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "../interface.css";

// Predefined admin wallet address
const ADMIN_ADDRESS = "0xe9D190c1869628664a6a0a8Eb2CC1D98FdE26955";

const Login: React.FC = () => {
  const [metaMaskAccount, setMetaMaskAccount] = useState<string | null>(null);
  const navigate = useNavigate();  // Hook for navigation

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setMetaMaskAccount(accounts[0]);
        console.log("Connected MetaMask account:", accounts[0]);

        // Check if the connected account is the admin
        if (accounts[0].toLowerCase() === ADMIN_ADDRESS.toLowerCase()) {
          console.log("Admin logged in. Redirecting to Admin Page...");
          navigate("/admin");  // Redirect to admin page
        } else {
          console.log("Non-admin logged in.");
        }

        // Example: Use web3Instance for further blockchain interactions
        console.log("web3Instance initialized:", web3Instance);
      } catch (error) {
        console.error("MetaMask connection failed:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask to log in.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Please log in to continue</h2>
        <div className="login-card">
          {!metaMaskAccount && (
            <div className="button-large" onClick={connectMetaMask}>
              <img
                src={metamaskIcon}  // Use the imported image here
                alt="Metamask"
                className="metamask-icon"
              />
              Login with MetaMask
            </div>
          )}
          {metaMaskAccount && (
            <div className="account-details">
              <h2>Welcome</h2>
              <p>Connected MetaMask Account:</p>
              <h3>{metaMaskAccount}</h3>
            </div>
          )}
        </div>
        {/* Have you registered link */}
        <div className="register-link">
          <p>
            Have you not registered yet?{" "}
            <a href="/register">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
