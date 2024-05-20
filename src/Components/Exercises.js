import React, { useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { options, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
// import { fetchMockExercises } from '../utils/mockData'

const API = 'https://exercisedb.p.rapidapi.com/exercises'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  
    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = []
            if (bodyPart === 'all') {
                exercisesData = await fetchData(API, options)
            } else {
                exercisesData = await fetchData(`${API}/bodyPart/${bodyPart}?limit=1000&offset=0`, options)
            } 
            setExercises(exercisesData)
        }
        fetchExercisesData()
    }, [bodyPart])


// MOCK DATA

    // useEffect(() => {
    //     const fetchExercisesData = async () => {
    //       const exercisesData = await fetchMockExercises();
    //       setExercises(exercisesData);
    //     };
    //     fetchExercisesData();
    // }, []);
  
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
            {Array.isArray(exercises) && exercises.length > 0 ? (
                exercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))
                ) : (
                    <p>No exercises found</p>
                )
            }
        </Stack>
    </Box>
  )
}

export default Exercises