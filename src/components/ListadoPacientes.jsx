import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return(
        <div className='md:w-1/2 lg:w-3/5'>

            {/* Hace una comparación para comprobar si hay datos registrados o no */}
            {pacientes && pacientes.length ? (
                
                // Retnora la lista en caso de tener datos
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

                    <p className="text-lg mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y Citas
                        </span>
                    </p>

                    <div className='h-screen md:overflow-y-scroll'>

                        {/* Se muestra como tarjeta cada registro nuevo. */}
                        { pacientes.map( (paciente) => (

                            <Paciente
                                key         = {paciente.id}
                                paciente    = {paciente}
                                setPaciente = {setPaciente}
                                eliminarPaciente = {eliminarPaciente}
                            />

                        ))}

                    </div>

                </>

            ) : (
                
                // Solo retorna el encabezado en caso de que no haya información registrada
                <>
                    <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>

                    <p className="text-lg mt-5 mb-10 text-center">
                        Comienza agregando pacientes  {''}
                        <span className="text-indigo-600 font-bold">
                            y aparecerán en este lugar
                        </span>
                    </p>
                </>
            ) }

                        
        </div>
    );
}

export default ListadoPacientes;