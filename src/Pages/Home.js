import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroHome from '../Components/HeroHome'
import SearchExercises from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'
import ScrollTop from '../Components/ScrollTop'

const Home = () => {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')

    return (
        <Box>
            <HeroHome />
            <SearchExercises 
                setExercises={setExercises} 
                bodyPart={bodyPart} 
                setBodyPart={setBodyPart}
            />
            <Exercises 
                exercises={exercises}
                setExercises={setExercises} 
                bodyPart={bodyPart} 
            />
            <ScrollTop />
        </Box>
    )
}

export default Home