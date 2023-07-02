import React from 'react'
import { Box } from '@mui/material'
import HeroProgress from '../Components/HeroProgress'
import ProgressTable from '../Components/ProgressTable'
import TableProgress from '../Components/TableProgress'
import ScrollTop from '../Components/ScrollTop'

const Progress = () => {
  return (
    <Box>
      <HeroProgress />
      <TableProgress />
      <ProgressTable />
      <ScrollTop />
    </Box>

  )
}

export default Progress
