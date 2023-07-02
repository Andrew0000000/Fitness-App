import React from 'react'
import { Button } from '@mui/material'

const DeleteButton = ({ row }) => {

    const handleDelete = () => {
        // Implement the delete functionality here
        };
    
    return (
        <Button
            onClick={handleDelete}
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
            Delete
        </Button>
    )
}

export default DeleteButton