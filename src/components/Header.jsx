
export default function Header () {

    // const variableHeader = true;

    // Manda información del hijo al padre
    // tomar1Valor(variableHeader); Mas del codigo de ejemplo de las props

    return(
        <h1 className='font-black text-4xl text-center md:w-2/3 mx-auto'>
            Seguimiento Pacientes {''}
            <span className='text-indigo-600'>Veterinaria</span>
        </h1>
    )
}