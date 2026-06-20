import { useState } from 'react';
import { useFitness } from '../context/FitnessContext.jsx';

export default function Progress() {
  const { progress, addProgress } = useFitness();
  const [entry, setEntry] = useState({ weight: '', workout: '', notes: '' });
  const submit = (event) => { event.preventDefault(); addProgress(entry); setEntry({ weight: '', workout: '', notes: '' }); };
  const update = (event) => setEntry({ ...entry, [event.target.name]: event.target.value });
  return (
    <div className="grid-2">
      <form className="card form-grid" onSubmit={submit}><h3>Add Progress</h3><label>Weight (kg)<input required name="weight" type="number" value={entry.weight} onChange={update} /></label><label>Workout Completed<input required name="workout" value={entry.workout} onChange={update} placeholder="e.g., Push day" /></label><label>Notes<textarea name="notes" value={entry.notes} onChange={update} placeholder="Energy, meals, improvements" /></label><button>Save Progress</button></form>
      <section className="card"><h3>Progress History</h3>{progress.length === 0 ? <p>No progress added yet.</p> : progress.map((item) => <article className="history" key={item.id}><b>{item.date}</b><span>{item.weight} kg • {item.workout}</span><p>{item.notes}</p></article>)}</section>
    </div>
  );
}
