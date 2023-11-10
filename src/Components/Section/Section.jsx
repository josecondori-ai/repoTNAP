import React ,{useState}from 'react';
import './Section'
import { Box,Text } from '@chakra-ui/react';
const Section = () => {

const [contador,setContador]=useState(0)
console.log(contador)

function incrementar(){
    if(contador<10){
        setContador(contador+1) 

    }
}

function decrementar(){
    setContador(contador-1)
}

    return(
      
            
            <Box as='header' bg='tomato' h="500px">
                <h1>{contador}</h1>
                <button onClick={incrementar} disabled={contador==10?"disable":""}>sumar numeros</button>
                <button onClick={decrementar}>restar numeros</button>

               <Box bg={{base:'pink',md:'blue',lg:'green'}}>Soy una caja</Box> 
               
               
               
                <Box display="flex" justifyContent="center" alignItems="center" as='header' bg='white' h="300px">
                    <Box bg="black" w='50px' h='50px'>uno</Box>
                    <Box bg="yellow" w='50px' h='50px'>dos</Box>
                    <Box bg="green" w='50px' h='50px'>tres</Box>

                </Box>
                
                </Box>


            
            
     
    )
}

export { Section }