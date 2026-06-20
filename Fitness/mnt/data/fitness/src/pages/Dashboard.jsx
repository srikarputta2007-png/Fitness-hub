import ProfileForm from '../components/ProfileForm.jsx';
import { useFitness } from '../context/FitnessContext.jsx';

export default function Dashboard() {
  const { profile, metrics } = useFitness();
  return (
    <div className="grid-2">
      <ProfileForm />
      <section className="card result-card">
        <h3>{profile.name ? `${profile.name}'s Fitness Report` : 'Fitness Report'}</h3>
        <div className="stat"><span>BMI</span><strong>{metrics.bmi ? metrics.bmi.value : '--'}</strong><small>{metrics.bmi?.status || 'Enter height and weight'}</small></div>
        <div className="stat"><span>Maintenance Calories</span><strong>{metrics.calories ? metrics.calories.maintenance : '--'}</strong><small>kcal/day</small></div>
        <div className="stat"><span>Goal Calories</span><strong>{metrics.calories ? metrics.calories.target : '--'}</strong><small>kcal/day</small></div>
        <p className="notice">{metrics.plan.summary}</p>
      </section>
    </div>
  );
}
