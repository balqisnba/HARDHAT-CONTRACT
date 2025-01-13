import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import '../interface.css'; // Assuming the styles remain the same

const Register: React.FC = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [nationalId, setNationalId] = useState('');

  // Function to handle the registration process
  const handleRegister = () => {
    console.log('User Registration Data:', {
      name,
      walletAddress,
      nationalId,
    });
    // Add your backend or blockchain integration logic here
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Register</h1>
        <p>Fill in the details to create your account</p>
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
          <div className="form-group">
            <label className="form-label">Wallet Address</label>
            <InputField
              label=""
              type="text"
              placeholder="Enter your wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </div>
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
          {/* Reusable Button Component */}
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
