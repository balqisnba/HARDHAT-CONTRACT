import React, { useState } from "react";
import Web3 from "web3";
import { CONTRACT_ADDRESS, ADMIN_ADDRESS } from "../config";
import contractABI from "../abi.json";

const Admin = () => {
    const [candidateName, setCandidateName] = useState("");
    const [party, setParty] = useState("");
    const [message, setMessage] = useState("");

    const registerCandidate = async () => {
        if (!window.ethereum) {
            alert("MetaMask not detected");
            return;
        }

        try {
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.requestAccounts();
            const contract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);

            if (accounts[0].toLowerCase() !== ADMIN_ADDRESS.toLowerCase()) {
                setMessage("Only the admin can register candidates.");
                return;
            }

            await contract.methods
                .registerCandidate(candidateName, accounts[0], party)
                .send({ from: accounts[0] });

            setMessage("Candidate registered successfully!");
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <input
                type="text"
                placeholder="Candidate Name"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Party Name"
                value={party}
                onChange={(e) => setParty(e.target.value)}
            />
            <button onClick={registerCandidate}>Register Candidate</button>
            <p>{message}</p>
        </div>
    );
};

export default Admin;
