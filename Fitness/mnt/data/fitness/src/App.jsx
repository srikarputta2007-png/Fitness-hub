import { NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Plan from './pages/Plan.jsx';
import Progress from './pages/Progress.jsx';
import Timer from './pages/Timer.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <nav className="nav" aria-label="Main navigation">
          <h1>Fitness Hub</h1>
          <div className="links">
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/plan">Plan</NavLink>
            <NavLink to="/progress">Progress</NavLink>
            <NavLink to="/timer">Timer</NavLink>
          </div>
        </nav>
        <section className="hero-content">
          <p className="eyebrow">Personal workout + diet planner</p>
          <h2>Build a structured fitness routine from your body metrics and goal.</h2>
          <p>Calculate BMI, estimate calories, generate plans, schedule workouts, and save progress locally.</p>
        </section>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </main>
    </div>
  );
}
