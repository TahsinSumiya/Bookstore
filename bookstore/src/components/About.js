import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' sx={{fontfamliy:'fantasy'}}>
     <Typography  variant='h2'>Book Store</Typography>
     <Typography variant='h3'>Contains Mern stack : html css express nodejs react material-ui mongodb</Typography>
    </Box>
  )
}

export default About
