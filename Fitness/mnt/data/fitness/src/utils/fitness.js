export function calculateBMI(weight, height) {
  const w = Number(weight);
  const h = Number(height) / 100;
  if (!w || !h) return null;
  const value = w / (h * h);
  let status = 'Healthy';
  if (value < 18.5) status = 'Underweight';
  if (value >= 25) status = 'Overweight';
  if (value >= 30) status = 'Obese';
  return { value: value.toFixed(1), status };
}

export function estimateCalories(profile) {
  const age = Number(profile.age);
  const weight = Number(profile.weight);
  const height = Number(profile.height);
  if (!age || !weight || !height) return null;
  const base = profile.gender === 'female'
    ? 10 * weight + 6.25 * height - 5 * age - 161
    : 10 * weight + 6.25 * height - 5 * age + 5;
  const multiplier = { low: 1.2, moderate: 1.55, high: 1.725 }[profile.activity];
  const maintenance = Math.round(base * multiplier);
  const target = profile.goal === 'fat-loss' ? maintenance - 450 : profile.goal === 'muscle-gain' ? maintenance + 350 : maintenance;
  return { maintenance, target };
}

export function buildFitnessPlan(profile, bmi, calories) {
  const goals = {
    'fat-loss': {
      title: 'Fat Loss Plan',
      workouts: ['HIIT + core', 'Upper body strength', 'Brisk walk / cycling', 'Lower body strength', 'Full-body circuit'],
      diet: ['Lean protein every meal', 'High-fiber vegetables', 'Controlled carbs', '2.5–3 L water']
    },
    'muscle-gain': {
      title: 'Muscle Gain Plan',
      workouts: ['Push day', 'Pull day', 'Leg day', 'Upper hypertrophy', 'Mobility + light cardio'],
      diet: ['Calorie surplus', 'Protein 1.6–2.2 g/kg', 'Complex carbs', 'Healthy fats']
    },
    maintenance: {
      title: 'Weight Maintenance Plan',
      workouts: ['Full-body strength', 'Yoga / mobility', 'Cardio intervals', 'Functional training', 'Active recovery'],
      diet: ['Balanced plate', 'Consistent meal timing', 'Moderate snacks', 'Hydration']
    }
  };
  const selected = goals[profile.goal] || goals.maintenance;
  return {
    ...selected,
    summary: bmi && calories ? `BMI ${bmi.value} (${bmi.status}). Daily target: ${calories.target} kcal.` : 'Enter your details to generate a complete plan.'
  };
}
