import React from 'react'
import { Box, Typography } from '@mui/material'

const HeroProgress = () => {
  return (
    <Box
        sx={{ mt: { md:'70px', xs:'50px' } }}
        p='10px'
        textAlign='center'
        alignItems='center'
    >
        <Typography
        fontWeight={600} 
        sx={{ fontSize: { md: '40px', xs: '28px' }, mb: { md: '100px', xs: '40px' } }}
        mb='23px' mt='30px'
    >
        Exercises Progress
    </Typography>

    </Box>


  )
}

export default HeroProgress