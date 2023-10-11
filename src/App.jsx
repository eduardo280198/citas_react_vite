import { useEffect, useState } from 'react'

import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import ListadoPacientes from "./components/ListadoPacientes.jsx";

export default function App() {
  
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente]   = useState({});

  // Codigo de ejemplo de los props
  // const tomar1Valor = (valor) => {
  //   console.log(`Desde el header ${valor}`);
  // }

  // useEffect
  useEffect( () => {
    
    // Obtiene los datos almacenados en el localStorage
    const obtenerLS = () => {

      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];  

      // Lo extraido del localStorage es guardado en el State pacientes, el cual almacena la lista de pacientes
      setPacientes(pacientesLS);

    }

    obtenerLS();

  }, [] );

  useEffect( () => {

    localStorage.setItem( 'pacientes', JSON.stringify(pacientes) );
  }, [pacientes] );


  // Fnción para eliminar un paciente.
  const eliminarPaciente = (id) => {
    
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);

    setPacientes(pacientesActualizados);
  }

  return(
    <div className='container mx-auto mt-10'>

        <Header
          // numero={1}
          // isAdmin={false}
          // tomar1Valor={tomar1Valor} 
        />

        <div className='mt-12 md:flex mx-5'>

          <Formulario
            pacientes     = {pacientes} // Es el listado de Pacientes.
            setPacientes  = {setPacientes} // Es la funcion que es para modificar el listado de pacientes.
            
            paciente      = {paciente} // Es es un solo paciente el cual sera el que se quiere editar
            setPaciente   = {setPaciente}
          />

          <ListadoPacientes
            pacientes   = {pacientes} // Es el listado de Pacientes.
            setPaciente = {setPaciente} // Es la funcion que modifica Paciente.
            eliminarPaciente = {eliminarPaciente} // Se pasa la función para eliminar un paciente.
          />  
          
        </div>
        
    </div>
  );
}
