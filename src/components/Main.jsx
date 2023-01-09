import React, { useState } from 'react'
import Box from '@mui/material/Box'
import axios from 'axios'

export default function Main(){
  const [cep, setCep] = useState('')
  const [cepData, setCepData] = useState(null)
  const getCep = (logadouro)=>{
    axios.get(`https://viacep.com.br/ws/${logadouro}/json/`)
    .then(response => setCepData(response.data))
    .catch(err => console.log(err))
  }
   
  return(
    <Box sx={{ backgroundColor:'#232325', height:'84vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
      <Box component='form' onSubmit={(e) => {
        e.preventDefault();
        getCep(cep);
      }}>
        <Box component='input' placeholder='Digitar Cep...' type='text' value={cep} onChange={(e) => setCep(e.target.value)} sx={{color: 'black', fontSize: '24px', fontWeight: 'bold', borderRadius:'20px'}}/>
        <Box component='input' type='submit' value='Pesquisar' sx={{color:'black', fontSize: '24px', fontWeight: 'bold', borderRadius:'20px'}}></Box>
      </Box>
      {cepData && (
        <Box>
          <Box component='p' sx={{color: 'white', fontSize:'27px'}}><strong>Rua: {cepData.logradouro}</strong></Box>
          <Box component='p' sx={{color: 'white', fontSize:'27px'}}><strong>Bairro: {cepData.bairro}</strong></Box>
          <Box component='p' sx={{color: 'white', fontSize:'27px'}}><strong>Cidade: {cepData.localidade}</strong></Box>
          <Box component='p' sx={{color: 'white', fontSize:'27px'}}><strong>Estado: {cepData.uf}</strong></Box>
        </Box>
      )}
    </Box>
  )
}