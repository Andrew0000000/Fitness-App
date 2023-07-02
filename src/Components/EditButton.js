import React from 'react'
import { Button } from '@mui/material'

const EditButton = ({ row }) => {

    const handleEdit = () => {
        // Implement the edit functionality here
    };

    return (
        <Button
            onClick={handleEdit}
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
            Edit
        </Button>
    )
}

export default EditButton