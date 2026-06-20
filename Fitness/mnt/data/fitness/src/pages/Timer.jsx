import { useEffect, useState } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(300);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running || seconds <= 0) return undefined;
    const id = setInterval(() => setSeconds((value) => value - 1), 1000);
    return () => clearInterval(id);
  }, [running, seconds]);
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return (
    <section className="card timer-card"><h3>Workout Timer</h3><div className="timer">{minutes}:{secs}</div><div className="timer-actions"><button onClick={() => setRunning(!running)}>{running ? 'Pause' : 'Start'}</button><button onClick={() => { setRunning(false); setSeconds(300); }}>Reset 5 min</button><button onClick={() => { setRunning(false); setSeconds(60); }}>Set 1 min</button></div></section>
  );
}
