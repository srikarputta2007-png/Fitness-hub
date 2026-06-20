import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { buildFitnessPlan, calculateBMI, estimateCalories } from '../utils/fitness.js';

const FitnessContext = createContext(null);
const starterProfile = { name: '', age: '', weight: '', height: '', gender: 'male', activity: 'moderate', goal: 'fat-loss' };

export function FitnessProvider({ children }) {
  const [profile, setProfile] = useState(() => JSON.parse(localStorage.getItem('fitness-profile')) || starterProfile);
  const [progress, setProgress] = useState(() => JSON.parse(localStorage.getItem('fitness-progress')) || []);

  useEffect(() => localStorage.setItem('fitness-profile', JSON.stringify(profile)), [profile]);
  useEffect(() => localStorage.setItem('fitness-progress', JSON.stringify(progress)), [progress]);

  const metrics = useMemo(() => {
    const bmi = calculateBMI(profile.weight, profile.height);
    const calories = estimateCalories(profile);
    const plan = buildFitnessPlan(profile, bmi, calories);
    return { bmi, calories, plan };
  }, [profile]);

  const addProgress = (entry) => setProgress((items) => [{ id: crypto.randomUUID(), date: new Date().toLocaleDateString(), ...entry }, ...items]);

  return <FitnessContext.Provider value={{ profile, setProfile, metrics, progress, addProgress }}>{children}</FitnessContext.Provider>;
}

export const useFitness = () => useContext(FitnessContext);
