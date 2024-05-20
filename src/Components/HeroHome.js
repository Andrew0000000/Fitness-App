import React from 'react'
import { Box, Typography } from '@mui/material'

const HeroHome = () => {
  return (
    <Box
        sx={{ mt: { md:'120px', xs:'70px' } }}
        p='20px'
        textAlign='center'
    >
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