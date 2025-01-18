import './styles.css';  // Assuming the CSS file is named 'styles.css'

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="candidates-container">
                <h3>Candidates</h3>
                <div className="candidate">
                    <div className="candidate-box"></div>
                    <p>Choi Seung Choel, PAS Selangor</p>
                </div>
                <div className="candidate">
                    <div className="candidate-box"></div>
                    <p>Abu, BN Selangor</p>
                </div>
                <div className="candidate">
                    <div className="candidate-box"></div>
                    <p>Ahmad, PH Selangor</p>
                </div>
            </div>

            <div className="vote-section">
                <h3>Are you ready to vote?</h3>
                <button className="vote-button">Vote</button>
            </div>
        </div>
    );
};

export default HomePage;
