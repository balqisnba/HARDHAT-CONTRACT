import React, { useState } from "react";
import Web3 from "web3";
import metamaskIcon from '../assets/MetaMask_Fox.png';
import "../interface.css";

const Login: React.FC = () => {
  const [metaMaskAccount, setMetaMaskAccount] = useState<string | null>(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setMetaMaskAccount(accounts[0]);
        console.log("Connected MetaMask account:", accounts[0]);

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
