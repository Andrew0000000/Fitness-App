const mockExercises = [
    {
      id: 1,
      name: 'Push-ups',
      bodyPart: 'chest',
      target: 'Upper body',
      equipment: 'Bodyweight',
    },
    {
      id: 2,
      name: 'Squats',
      bodyPart: 'upper arms',
      target: 'Lower body',
      equipment: 'Bodyweight',
    },
    {
      id: 3,
      name: 'Plank',
      bodyPart: 'waist',
      target: 'Abs',
      equipment: 'Bodyweight',
    },
    // Add more exercises as needed
];

// Mock data for body parts
const mockBodyParts = ['All', 'chest', 'upper arms', 'waist'];

// Function to simulate API fetch
const fetchMockExercises = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockExercises);
    }, 1000); // Simulate 1 second delay
  });
};

export { fetchMockExercises, mockBodyParts };