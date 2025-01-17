import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Vote from "./pages/Vote";
import Results from "./pages/Results";
import ContactUs from "./pages/ContactUs";
import "./interface.css"; // Global CSS

// Styles for header and navigation
const headerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "linear-gradient(to bottom, #2b2c68, #338aca)",
  padding: "10px 20px",
  position: "fixed",
  top: "0",
  width: "100%",
  zIndex: 1000,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const logoStyles: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "1.5rem",
  fontWeight: "bold",
};

const navStyles: React.CSSProperties = {
  display: "flex",
  gap: "20px",
};

const linkStyles: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.3s ease",
};

// Updated active styles
const activeClassName = "active"; // Define a class for active links

const App = () => {
  return (
    <Router>
      {/* Header Component */}
      <header style={headerStyles}>
        <div style={logoStyles}>Voting dApp</div>
        <nav style={navStyles}>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            style={linkStyles}
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            style={linkStyles}
          >
            Profile
          </NavLink>
          <NavLink
            to="/vote"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            style={linkStyles}
          >
            Vote
          </NavLink>
          <NavLink
            to="/results"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            style={linkStyles}
          >
            Results
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            style={linkStyles}
          >
            Contact Us
          </NavLink>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ marginTop: "80px", padding: "20px" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
    </Router>
  );
};

// Render the App
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
