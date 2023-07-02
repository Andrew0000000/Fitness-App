import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const HeroHome = () => {
  return (
    <Box
        sx={{ mt: { md:'120px', xs:'70px' } }}
        p='20px'
        textAlign='center'
    >
        <Typography
            fontWeight={600} 
            sx={{ fontSize: { md: '40px', xs: '28px' }, mb: { md: '250px', xs: '170px' } }}
        >
            Your Fitness Journey <br /> Starts Here
        </Typography>
        <Typography
            sx={{ fontSize: { md: '30px', xs: '20px' } }}
            lineHeight='35px'
        >
            Check out our most effective exercises below
        </Typography>

    </Box>
  )
}

export default HeroHome