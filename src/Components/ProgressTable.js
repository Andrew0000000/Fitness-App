
import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';


const ProgressTable = () => {
  const [exercises, setExercises] = useState([]);
  const [weight, setWeight] = useState([]);
  const [type, setType] = useState([]);
  const [newExercise, setNewExercise] = useState('');
  const [newWeight, setNewWeight] = useState('');
  const [newType, setNewType] = useState('');
  
  const handleAddExerciseAndWeight = () => {
    if (newExercise.trim() !== '') {
      setExercises([...exercises, newExercise]);
      setNewExercise('');
      setWeight([...weight, newWeight]);
      setNewWeight('');
      setType([...type, newType]);
      setNewType('');
    }
  };

  const handleRemoveExercise = (exercise, index) => {
    setExercises(exercises.filter((item) => item !== exercise));
    setWeight(weight.filter((item) => item !== weight[index]));
    setType(type.filter((item) => item !== type[index]));
  };



  return (
    <Box
      sx={{ mt: { md:'70px', xs:'50px' } }}
      p='10px'
      textAlign='center'
      alignItems='center'
    >
      {/* Add Exercise and Weight */}
      <Box alignItems="center" mb={3} >
        <TextField
          label="Exercise Name"
          value={newExercise}
          onChange={(e) => setNewExercise(e.target.value)}
          sx={{ margin: '10px' }}
        />
        <TextField
          label="Weight"
          value={newWeight}
          onChange={(e) => setNewWeight(e.target.value)}
          sx={{ margin: '10px' }}
        />
        <TextField
          label="Rep/PR"
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
          sx={{ margin: '10px' }}
        />
        <br />
        <Button variant="contained" onClick={handleAddExerciseAndWeight}>
          Add Exercise
        </Button>
      </Box>

      {/* List of Tracked Exercises */}
      {exercises.length > 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={3}
        >
          {exercises.map((exercise, index) => (
            <Box key={exercise} display="flex" alignItems="center" m={1}>
              <Typography>{index+1}. {exercise} <br /> {type[index]}: {weight[index]}</Typography>
              {/* <Chip label={exercise} onDelete={handleRemoveExercise(exercise, index)} /> */}
              <Button
                variant="outlined"
                onClick={() => handleRemoveExercise(exercise, index)}
                sx={{ margin: '20px' }}
              >
                Remove
              </Button>
              {/* <Button
                variant="outlined"
                onClick={() => handleEditExercise(exercise, weight, type)}
                sx={{ margin: '20px' }}
              >
                Edit
              </Button> */}
            </Box>
          ))}
        </Box>
      ) : (
        <Typography>No exercises tracked yet.</Typography>
      )}

      {/* Edit Exercise */}
      {/* Implementation of edit functionality is left as an exercise */}
    </Box>
  );
};

export default ProgressTable;
