import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RegisterCandidates from "./RegisterCandidates";  // Import RegisterCandidates
import '../interface.css';  // Assuming you're using the same CSS file for styling

const AdminPage = () => {
    return (
        <Router>
            <div className="admin-container">
                <div className="admin-buttons">
                    {/* Link to the Register page when the button is clicked */}
                    <Link to="/register" className="admin-button register-button">
                        Register Candidates
                    </Link>
                    <button className="admin-button start-voting-button">Start Voting</button>
                    <button className="admin-button end-voting-button">End Voting</button>
                </div>
            </div>

            {/* Set up the route for Register page */}
            <Routes>
                {/* Use element instead of component in React Router v6 */}
                <Route path="/register" element={<RegisterCandidates />} />
            </Routes>
        </Router>
    );
};

export default AdminPage;
