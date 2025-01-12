import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { CONTRACT_ADDRESS } from "../config";
import contractABI from "../abi.json";

const Results = () => {
    const [results, setResults] = useState([]);
    const [winner, setWinner] = useState("");

    useEffect(() => {
        const fetchResults = async () => {
            if (!window.ethereum) return;

            try {
                const web3 = new Web3(window.ethereum);
                const contract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);

                const candidates = await contract.methods.getCandidates().call();
                const formattedResults = candidates[0].map((id, index) => ({
                    id,
                    name: candidates[1][index],
                    party: candidates[2][index],
                }));

                setResults(formattedResults);

                const winnerName = await contract.methods.getWinner().call();
                setWinner(winnerName);
            } catch (error) {
                console.error(error);
            }
        };

        fetchResults();
    }, []);

    return (
        <div>
            <h2>Voting Results</h2>
            <ul>
                {results.map((candidate) => (
                    <li key={candidate.id}>
                        {candidate.name} ({candidate.party})
                    </li>
                ))}
            </ul>
            <h3>Winner: {winner}</h3>
        </div>
    );
};

export default Results;
