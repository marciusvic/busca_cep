import React from 'react'
import Box from '@mui/material/Box';

export default function Footer(){
  return(
    <Box sx={{ backgroundColor:'#000000', height:'8vh', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center' }}component= "a" href="https://github.com/marciusvic" target="_blank" rel="noreferrer"> 
          <Box component="img" src="https://cdn-icons-png.flaticon.com/512/919/919847.png" alt="github logo" height="3em"/>
          <Box component= "a" href="https://github.com/marciusvic" target="_blank" rel="noreferrer" sx={{textDecorationColor:'#000000', color:'white', fontSize:'38px'}}>Marciusvic</Box>
        </Box>
    </Box>
  )
}