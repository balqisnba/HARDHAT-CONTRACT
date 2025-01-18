import React, { useState } from "react";
import Web3 from "web3";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../interface.css"; // Assuming the styles remain the same

const Register: React.FC = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [accounts, setAccounts] = useState<string[]>([]);

  // Function to handle the registration process
  const handleRegister = () => {
    console.log("User Registration Data:", {
      name,
      nationalId,
    });
    // Add the wallet address to localStorage
    if (accounts.length > 0) {
      localStorage.setItem("walletAddress", accounts[0]);  // Store the wallet address
    }
    // Add your backend or blockchain integration logic here
  };

  // Function to connect to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      if (window.ethereum.isMetaMask) {
        const web3Instance = new Web3(window.ethereum);
        const accounts = await web3Instance.eth.requestAccounts();
        setAccounts(accounts);
      }
    } else {
      alert("Please install MetaMask to connect.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Register</h1>
        <p>Fill in the details to create your account</p>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* Name Input */}
          <div className="form-group">
            <label className="form-label">Name</label>
            <InputField
              label=""
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* MetaMask Wallet Connection */}
          <div className="form-group">
            <label className="form-label">MetaMask Wallet</label>
            {accounts.length > 0 && (
              <div>
                <h2>Account details:</h2>
                <h2>Address: {accounts[0]} </h2>
              </div>
            )}
            {accounts.length === 0 && (
              <Button
                text="Connect to MetaMask"
                onClick={connectWallet}
                className="metamask-connect"
              />
            )}
          </div>

          {/* National ID Input */}
          <div className="form-group">
            <label className="form-label">National ID</label>
            <InputField
              label=""
              type="text"
              placeholder="Enter your National ID"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
          </div>

          <Button text="Register" onClick={handleRegister} className="btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default Register;
