import React, { useState, useEffect } from "react";
import Web3 from "web3";
import metamaskIcon from "../assets/MetaMask_Fox.png";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "../interface.css";

const ADMIN_ADDRESS = "0xe9D190c1869628664a6a0a8Eb2CC1D98FdE26955";  // Admin's wallet address

const Login: React.FC = () => {
  const [metaMaskAccount, setMetaMaskAccount] = useState<string | null>(null);
  const navigate = useNavigate();  // Hook for navigation

  useEffect(() => {
    // Check if wallet address exists in localStorage
    const storedWallet = localStorage.getItem("walletAddress");
    if (storedWallet) {
      setMetaMaskAccount(storedWallet);
    }
  }, []);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      const accounts = await web3Instance.eth.requestAccounts();
      setMetaMaskAccount(accounts[0]);

      // Check if the connected address is the admin
      if (accounts[0].toLowerCase() === ADMIN_ADDRESS.toLowerCase()) {
        console.log("Admin logged in. Redirecting to Admin Page...");
        navigate("/admin");
      } else {
        console.log("Non-admin logged in.");
      }
    } else {
      alert("Please install MetaMask to connect.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Please log in to continue</h2>
        <div className="login-card">
          {!metaMaskAccount && (
            <div className="button-large" onClick={connectMetaMask}>
              <img src={metamaskIcon} alt="Metamask" className="metamask-icon" />
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
      </div>
    </div>
  );
};

export default Login;
