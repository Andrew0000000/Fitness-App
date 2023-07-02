import React from 'react'
import { Stack, Typography } from '@mui/material'
import arms from '../assets/icons/arms.png'
import back from '../assets/icons/back.png'
import chest from '../assets/icons/chest.png'
import legs from '../assets/icons/legs.png'
import shoulder from '../assets/icons/shoulder.png'
import waist from '../assets/icons/waist.png'
import neck from '../assets/icons/neck.png'
import cardio from '../assets/icons/cardio.png'
import all from '../assets/icons/all.png'


const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
            border: bodyPart === item ? '6px solid black' : 'none',
            backgroundColor: '#ae9a60',
            width: { md: '270px', xs: '150px' },
            height: { md: '270px', xs: '150px'},
            cursor: 'pointer',
            gap: { md: '20px', xs: '10px' },
            borderRadius: '20px',
            margin: { md: '20px', xs: '10px' },
        }}
        onClick={() => {
            setBodyPart(item)
            // window.scrollTo({ top: 1200, behavior: 'smooth' })
        }}
    >
        <img src={
            item === 'waist' ? waist :
            item === 'chest' ? chest :
            item === 'upper arms' ? arms :
            item === 'lower arms' ? arms :
            item === 'upper legs' ? legs :
            item === 'lower legs' ? legs :
            item === 'shoulders' ? shoulder :
            item === 'back' ? back :
            item === 'neck' ? neck :
            item === 'cardio' ? cardio :
            all
        }
            alt='logo' 
            style={{ width: '60px', height: '60px' }} 
        />
        <Typography
            sx={{ fontSize: { md: '24px', xs: '18px' } }}
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