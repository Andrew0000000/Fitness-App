import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography, Button } from '@mui/material'

const ExerciseCard = ( {exercise} ) => {
  return (
    <Link
        className='exercise-card' to='/exercise/${exercise.id}'
    >
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction='row' justifyContent='center' >
            <Button
                sx={{
                    m: '8px',
                    color: '#212121',
                    background: '#ae9a60',
                    fontSize: '12px',
                    borderRadius: '10px',
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                }}
            >
                {exercise.bodyPart}
            </Button>
            <Button
                sx={{
                    m: '8px',
                    color: '#212121',
                    background: '#ae9a60',
                    fontSize: '12px',
                    borderRadius: '10px',
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                }}
            >
                {exercise.target}
            </Button>
        </Stack>
        <Typography
            m='5px'
            color='#fff'
            fontWeight='bold'
            pb='10px'
            textTransform='capitalize'
            fontSize='22px'
            textAlign='center'
        >
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard