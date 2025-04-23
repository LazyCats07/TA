import React from 'react'
import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography';

// Component
import Navbar from '../../Navbar';
import Sidenav from '../../Sidenav'



export default function Sungai() {
  return (
    <>
    <Navbar />
        <Box height={50} />
        <Box sx={{ display: 'flex' }}>
        <Sidenav />
    <h1>Sungai</h1>
    </Box>
    </>
  )
}


