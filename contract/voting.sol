// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingDApp {
    struct Voter {
        string id;
        string name;
        bool isRegistered;
        bool hasVoted;
        uint votedTo;
    }

    struct Candidate {
        uint id;
        string name;
        address candidateAddress;
        string party;
        uint voteCount;
    }

    address public admin;
    bool public votingOpen;
    uint public totalVoters;
    mapping(address => Voter) public voters;
    mapping(uint => Candidate) public candidates;
    address[] public voterList;
    uint[] public candidateIds;

    event VotingEnded(uint winnerId, string winnerName);
    event VoterRegistered(address voterAddress, string id, string name);
    event CandidateRegistered(uint id, string name, address candidateAddress, string party);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    // Self-registration for voters, allowed anytime
    function registerVoter(string memory _id, string memory _name) public {
        require(!voters[msg.sender].isRegistered, "Voter is already registered");
        require(bytes(_id).length > 0, "National ID cannot be empty");
        require(bytes(_name).length > 0, "Voter name cannot be empty");

        voters[msg.sender] = Voter({
            id: _id,
            name: _name,
            isRegistered: true,
            hasVoted: false,
            votedTo: 0
        });
        voterList.push(msg.sender);
        totalVoters++;

        emit VoterRegistered(msg.sender, _id, _name);
    }

    // Candidate registration, allowed only before voting starts
    function registerCandidate(string memory _name, address _candidateAddress, string memory _party) public onlyAdmin {
        require(!votingOpen, "Cannot register candidates during voting period");
        uint id = candidateIds.length + 1;
        require(bytes(_name).length > 0, "Candidate name cannot be empty");
        require(bytes(_party).length > 0, "Party name cannot be empty");
        require(_candidateAddress != address(0), "Invalid candidate address");

        candidates[id] = Candidate({
            id: id,
            name: _name,
            candidateAddress: _candidateAddress,
            party: _party,
            voteCount: 0
        });
        candidateIds.push(id);

        // Automatically register candidate as a voter if not already registered
        if (!voters[_candidateAddress].isRegistered) {
            voters[_candidateAddress] = Voter({
                id: "",
                name: _name,
                isRegistered: true,
                hasVoted: false,
                votedTo: 0
            });
            voterList.push(_candidateAddress);
            totalVoters++;
        }

        emit CandidateRegistered(id, _name, _candidateAddress, _party);
    }

    function startVoting() public onlyAdmin {
        require(candidateIds.length >= 2, "There must be at least two candidates to start voting");
        votingOpen = true;
    }

    function endVoting() public onlyAdmin {
        votingOpen = false;
        declareWinner();
    }

    function vote(uint _candidateId) public {
        require(votingOpen, "Voting is not open");
        require(voters[msg.sender].isRegistered, "You are not a registered voter");
        require(!voters[msg.sender].hasVoted, "You have already voted");
        require(candidates[_candidateId].id != 0, "Candidate does not exist");

        voters[msg.sender].hasVoted = true;
        candidates[_candidateId].voteCount++;
    }

    function getCandidates() public view returns (uint[] memory, string[] memory, string[] memory) {
        uint[] memory ids = new uint[](candidateIds.length);
        string[] memory names = new string[](candidateIds.length);
        string[] memory parties = new string[](candidateIds.length);

        for (uint i = 0; i < candidateIds.length; i++) {
            ids[i] = candidates[candidateIds[i]].id;
            names[i] = candidates[candidateIds[i]].name;
            parties[i] = candidates[candidateIds[i]].party;
        }

        return (ids, names, parties);
    }

function declareWinner() internal {
    uint highestVotes = 0;
    uint[] memory topCandidates = new uint[](candidateIds.length); // Fixed-size array for temporary storage
    uint count = 0;

    // Identify top candidates
    for (uint i = 0; i < candidateIds.length; i++) {
        if (candidates[candidateIds[i]].voteCount > highestVotes) {
            highestVotes = candidates[candidateIds[i]].voteCount;
            count = 1;
            topCandidates[0] = candidateIds[i];
        } else if (candidates[candidateIds[i]].voteCount == highestVotes) {
            topCandidates[count] = candidateIds[i];
            count++;
        }
    }

    uint winnerId;
    if (count > 1) {
        // Randomly select a winner in case of a tie
        uint randomIndex = uint(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, msg.sender))) % count;
        winnerId = topCandidates[randomIndex];
    } else {
        winnerId = topCandidates[0];
    }

    emit VotingEnded(winnerId, candidates[winnerId].name);
}
}

//admin: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4

//candidate 1: abu
//candidate address: 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
//party: BN

//candidate 1: kinah
//candidate address: 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db
//party: PH

//voter 1 id: 8888
//voter 1 name: mahmud
//voter 1 address: 0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB

//voter 2 id: 9999
//voter 1 name: zaki
//voter 1 address: 0x617F2E2fD72FD9D5503197092aC168c91465E7f2
