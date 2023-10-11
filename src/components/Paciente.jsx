const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {namePet, nameOwner, email, date, sintomas, id} = paciente;

    const handleEliminar = () => {

        // Despliega una alerta de javascript que es para confirmar la eliminación
        const respuesta = confirm('Deseas Eliminar este paciente?');

        if(respuesta){
            eliminarPaciente(id);
        }
    }

    return(
        <div className="mb-5 md:mx-3 bg-white shadow-md px-5 py-10 rounded-xl ">
                
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{namePet}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{nameOwner}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Alta: {''}
                <span className="font-normal normal-case">{date}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className='flex justify-between mt-5'>
                <button
                    type='button'
                    onClick={() => setPaciente(paciente)}
                    className='bg-indigo-600 text-white font-bold uppercase py-2 px-10 rounded hover:bg-indigo-700 transition-all'
                >Editar</button>

                <button
                    type='button'
                    className='bg-red-600 text-white font-bold uppercase py-2 px-10 rounded hover:bg-red-700 transition-all'
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>

        </div>
    );
}

export default Paciente;