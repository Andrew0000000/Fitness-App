import React from 'react'
import { Button } from '@mui/material'

const AddButton = () => {

    const handleAddExerciseAndWeight = () => {
        // Implement the add functionality here
    };

    return (
        <Button 
            onClick={handleAddExerciseAndWeight}
            sx={{
                m: '8px',
                color: '#212121',
                background: '#a08b60',
                fontSize: '12px',
                borderRadius: '10px',
                textTransform: 'capitalize',
                fontWeight: 'bold',
            }}
        >
            Add Exercise
            
        </Button>
    )
}

export default AddButton