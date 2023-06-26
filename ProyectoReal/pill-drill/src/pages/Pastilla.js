import React from 'react'
import Layout from '../components/Layout'
 import Link from 'next/link'
 import Adafruit from '../conexion/Adafruit'
 import Buttons from '../components/Buttons';
 
 const Pastilla = () => {

  const boton_prender = () => {
    console.log('¡EL LED SE PRENDIÓ');
  };

  const boton_apagar = () => {
    console.log('¡EL LED SE APAGÓ');
  };
  

   return (
    
     <div>
      <h1>Dispensar Pastilla</h1>
      <h1>¿PRENDER EL LED?</h1>
      <Buttons text="Prender" onClick={boton_prender} /> <br/>
      <h1>¿APAGAR EL LED?</h1>
      <Buttons text="Apagar" onClick={boton_apagar} />
    </div>


     
     
   )
 }
 
 export default Pastilla
