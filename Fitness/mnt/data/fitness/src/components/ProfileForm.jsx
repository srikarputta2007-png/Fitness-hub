import { useFitness } from '../context/FitnessContext.jsx';

export default function ProfileForm() {
  const { profile, setProfile } = useFitness();
  const update = (event) => setProfile({ ...profile, [event.target.name]: event.target.value });

  return (
    <form className="card form-grid" onSubmit={(e) => e.preventDefault()}>
      <h3>User Information</h3>
      <label>Name<input required name="name" value={profile.name} onChange={update} placeholder="Your name" /></label>
      <label>Age<input required type="number" name="age" value={profile.age} onChange={update} min="12" /></label>
      <label>Weight (kg)<input required type="number" name="weight" value={profile.weight} onChange={update} min="20" /></label>
      <label>Height (cm)<input required type="number" name="height" value={profile.height} onChange={update} min="100" /></label>
      <label>Gender<select name="gender" value={profile.gender} onChange={update}><option value="male">Male</option><option value="female">Female</option></select></label>
      <label>Activity<select name="activity" value={profile.activity} onChange={update}><option value="low">Low</option><option value="moderate">Moderate</option><option value="high">High</option></select></label>
      <label>Goal<select name="goal" value={profile.goal} onChange={update}><option value="fat-loss">Fat Loss</option><option value="muscle-gain">Muscle Gain</option><option value="maintenance">Maintenance</option></select></label>
    </form>
  );
}
