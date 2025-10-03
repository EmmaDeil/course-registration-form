import RegistrationForm from "./RegistrationForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Course Registration System</h1>
        <p>Join thousands of students in our various online courses at Me Learning Institute.</p>
      </header>

      <main className="main-content">
        <RegistrationForm />
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Online Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
