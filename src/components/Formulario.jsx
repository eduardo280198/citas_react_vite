import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [namePet, setNamePet]     = useState('');
    const [nameOwner, setNameOwner] = useState('');
    const [email, setEmail]         = useState('');
    const [date, setDate]           = useState('');
    const [sintomas, setSintomas]   = useState('');

    const [error, setError]         = useState(false);

    useEffect( () => {

        // Object.keys() comprueba si un objeto tiene datos
        if( Object.keys(paciente).length > 0 ){

            // Se rellena el formulario con el paciente que se quiere editar.

            setNamePet(paciente.namePet);
            setNameOwner(paciente.nameOwner);
            setEmail(paciente.email);
            setDate(paciente.date);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])

    

    const generarId = () => {

        const random = Math.random().toString(36).substring(2);
        const fecha  = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        // Validaciones del Formulario
        if( [ namePet, nameOwner, email, date, sintomas ].includes('') ) {
            
            setError(true);
            return;
        }

        // Objeto de paciente
        const objetoPaciente = {
            namePet,
            nameOwner,
            email,
            date,
            sintomas
        }

        /* Comparación para la acción que se va a realizar
           Si es para agregar o modificar un paciente.
        */
        if(!paciente.id){
            // Nuevo registro de paciente
            setError(false);

            objetoPaciente.id = generarId();

            // Hace una copia de pacientes y luego agregar al final el nuevo objeto de pacientes.
            setPacientes([...pacientes, objetoPaciente]);
            

        } else {
            // Editando el registro de paciente
            setError(false);

            // Se le pone el Id al objeto de paciente que es el que contiene los datos actualizados
            objetoPaciente.id = paciente.id;

            // Crea un nuevo array tomando de base el de pacientes, para encontrar el objeto que tenga el mismo id
            const pacienteActualizado = pacientes.map( pacienteState =>
                pacienteState.id === paciente.id ? objetoPaciente : pacienteState
            )

            setPacientes(pacienteActualizado);

            // Reinicia el state paciente para que funcionen las comparativas en donde
            // se requiere que el state paciente este vacio
            setPaciente({});
        }
        

        // Reiniciando el Formulario
        setNamePet('');
        setNameOwner('');
        setEmail('');
        setDate('');
        setSintomas('');
    }

    return(
         
        <div className='md:w-1/2 lg:w-2/5'>

           
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 mb-10 text-center'>
                Añade Pacientes y {''}
                <span className='text-indigo-600 font-bold'>Administrarlos</span>
            </p>


            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                {/* Se hace una comparación y si error es true, se muestra el contenido */}
                {/* Se usa el prop children, el cual te permite pasar mas información/codigo HTML a otro componente */}
                { error && <Error><p>Todos los campos son obligatorios</p></Error> }
                
                {/* Nombre de la mascota */}
                <div className="mb-5">
                    <label htmlFor="namePet" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id='namePet'
                        type="text"
                        placeholder="Nombre de la mascota"
                        value={namePet}
                        /* (e) => setName(e.target.value) --> Es el que refleja el cambio de la variable en el input */
                        onChange={ (e) => setNamePet(e.target.value) }
                        className=" w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                {/* Nombre del Propietario */}
                <div className="mb-5">

                    <label htmlFor="nameOwner" className="block text-gray-700 uppercase font-bold">
                        Nombre del Propietario
                    </label>

                    <input
                        id='nameOwner'
                        type="text"
                        placeholder='Nombre del propietario'
                        value={nameOwner}
                        onChange={ (e) => setNameOwner(e.target.value) }
                        className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
                    />
                </div>

                {/* Email de contacto */}
                <div className="mb-5">

                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>

                    <input
                        id='email'
                        type="email"
                        placeholder="Email Contacto Propietario"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                        className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
                    />
                </div>

                {/* Fecha de Alta */}
                <div className="mb-5">

                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>

                    <input
                        id='alta'
                        type="date"
                        value={ date }
                        onChange={ (e) => setDate( e.target.value ) }
                        className="w-full border-2 p-2 mt-2 rounded-md"
                    />
                </div>

                {/* Sintomas */}
                <div className="mb-5">

                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>

                    <textarea
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        value={ sintomas }
                        onChange={ (e) => setSintomas( e.target.value ) }
                        className="w-full border-2 p-2 mt-2 resize-none placeholder-gray-400 rounded-md none"
                    />
                </div>
                
                {/* Botón que cambia cuando es editar o agregar un nuevo paciente */}

                <input
                    type='submit'
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                    value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />

            </form>
        </div>
    )
}

export default Formulario;