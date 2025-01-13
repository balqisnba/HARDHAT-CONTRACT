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
    // Add your backend or blockchain integration logic here
  };

  //Function to connect to MetaMask
  const connectWallet = async () => {
    //Check is Metamask extension is installed
    if (window.ethereum.isMetaMask) {
      //initialize web3
      const web3Instance = new Web3(window.ethereum);
      const accounts = await web3Instance.eth.requestAccounts();
      setAccounts(accounts);
    }
  };
  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Register</h1>
        <p>Fill in the details to create your account</p>

        {/*Ask user for their name*/}
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Reorganized Input Components */}
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

          {/*Connect to user using MetaMask Account*/}
          <div className="form-group">
            <label className="form-label">MetaMask Wallet</label>
            {accounts && accounts.length > 0 && (
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

          {/*Ask user to enter their National ID*/}
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
          {/* Register Button */}
          <Button
            text="Register"
            onClick={handleRegister}
            className="btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
