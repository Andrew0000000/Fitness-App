import React from 'react'
import { Stack, Typography } from '@mui/material'



const BodyPart = ({ item, bodyPart, setBodyPart, Icon }) => {
  return (
    <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
            border: bodyPart === item ? '6px solid #616161' : 'none',
            backgroundColor: '#ae9a60',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '20px',
            borderRadius: '20px',
            margin: '20px',
        }}
        onClick={() => {
            setBodyPart(item)
            // window.scrollTo({ top: 1200, behavior: 'smooth' })
        }}
    >
        <img src={Icon} 
            alt='logo' 
            style={{ width:'40px', height:'40px' }} 
        />
        <Typography
            fontSize='24px'
            fontWeight='bold'
            fontFamily='Alegreya'
            color='#212121'
            textTransform='capitalize'
        >
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart