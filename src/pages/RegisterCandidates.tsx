const RegisterPage = () => {
    return (
        <div>
            <h1>Register Candidates</h1>
            <p>Here you can register candidates for voting.</p>

            {/* Candidate registration form */}
            <form>
                <div>
                    <label htmlFor="candidateName">Candidate Name:</label>
                    <input
                        type="text"
                        id="candidateName"
                        placeholder="Enter candidate name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="party">Party:</label>
                    <input
                        type="text"
                        id="party"
                        placeholder="Enter candidate's party"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="region">Region:</label>
                    <input
                        type="text"
                        id="region"
                        placeholder="Enter region"
                        required
                    />
                </div>

                <button type="submit">Register Candidate</button>
            </form>
        </div>
    );
};

export default RegisterPage;
