import React from 'react'
import Box from '@mui/material/Box';
import Loc from './images/loc.png'

export default function Nav(){
  return(
    <Box sx={{ backgroundColor:'#000000', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', height:'8vh'}}>
      <Box component="img" src={Loc} alt='imagem de localização' height="3em"></Box>
      <Box sx={{ fontSize:'35px', color:'white' }}><strong>BUSCADOR DE CEP</strong></Box>
    </Box>
  )
}