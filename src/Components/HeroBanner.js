import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const HeroBanner = () => {
  return (
    <Box
        sx={{ mt: { md:'100px', xs:'70px' } }}
        p='20px'
        textAlign='center'
    >
        <Typography
            fontWeight={600} 
            sx={{ fontSize: { md: '40px', xs: '28px' }, mb: { md: '200px', xs: '80px' } }}
            mb='23px' mt='30px'
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

export default HeroBanner