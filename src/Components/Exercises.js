import React, { useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import { fetchMockExercises } from '../utils/mockData';

const API = 'https://exercisedb.p.rapidapi.com/exercises'
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  
    // useEffect(() => {
    //     const fetchExercisesData = async () => {
    //         let exercisesData = []
    //         if (bodyPart === 'all') {
    //             exercisesData = await fetchData(API, exerciseOptions)
    //         } else {
    //             exercisesData = await fetchData(`${API}/bodyPart/${bodyPart}`, exerciseOptions)
    //         } 
    //         setExercises(exercisesData)
    //     }
    //     fetchExercisesData()
    // }, [bodyPart])


// MOCK DATA

    useEffect(() => {
        const fetchExercisesData = async () => {
          const exercisesData = await fetchMockExercises();
          setExercises(exercisesData);
        };
        fetchExercisesData();
    }, []);
  
    return (
    <Box
        id='exercises'
        sx={{
            mt: { lg: '110px'},
        }}
        p='20px'
        mt='50px'

    >
        <Typography
            variant='h4'
            mb='50px'
        >
            Showing Results
        </Typography>
        <Stack
            direction='row'
            sx={{
                gap: { lg: '110px', xs: '50px' },
            }}
            flexWrap='wrap'
            justifyContent='center'
        >
            {exercises.map((exercise, index) => (
                <ExerciseCard key={index} exercise={exercise} />
            ))}
        </Stack>
    </Box>
  )
}

export default Exercises