import React, { useState } from 'react'
import {AppBar, Box, Toolbar, Typography, Tabs,Tab} from '@mui/material'
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import {NavLink} from 'react-router-dom'
const Bar = () => {
    const [value,setValue]=useState()
  return (
    <Box  >
      <AppBar position='sticky' sx={{bgcolor:'#250e59',color:'#fff'}}>

        <Toolbar>
            
        <Typography  >
            <AutoStoriesRoundedIcon sx={{my:-0.5,pr:0.5}} />
            BookStore
            </Typography>

            <Tabs sx={{ml:'auto'}}
             textColor='inherit'
              indicatorColor='primary'
               value={value}
                onChange={(e,val)=>setValue(val)}>

            <Tab LinkComponent={NavLink} to="/add" label='Add Product' />
            <Tab LinkComponent={NavLink} to="/books" label='Books' />
            <Tab LinkComponent={NavLink} to="/about" label='About Us' />
            </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Bar
