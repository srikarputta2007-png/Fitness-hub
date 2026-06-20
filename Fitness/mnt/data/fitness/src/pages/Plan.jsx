import { useFitness } from '../context/FitnessContext.jsx';

export default function Plan() {
  const { metrics } = useFitness();
  return (
    <div className="grid-2">
      <section className="card"><h3>{metrics.plan.title}</h3><p>{metrics.plan.summary}</p><h4>Weekly Workout Schedule</h4>{metrics.plan.workouts.map((item, index) => <div className="workout" key={item}><b>Day {index + 1}</b><span>{item}</span></div>)}</section>
      <section className="card"><h3>Diet Recommendations</h3><div className="diet-list">{metrics.plan.diet.map((item) => <article key={item}><span>✓</span><p>{item}</p></article>)}</div><p className="notice">Use this as a front-end demo recommendation. Consult a professional for medical advice.</p></section>
    </div>
  );
}
