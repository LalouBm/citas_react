import { useEffect } from "react";


function Paciente({paciente, setPaciente, eliminarPaciente}) {

    useEffect(() => { /* Este useEffect detecta cuando el componente está listo */
        //console.log('El componente está listo');
    }, [])

    const {nombre, propietario, email, fecha, sintomas, id} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?');
        if(respuesta){
            eliminarPaciente(id)
        }
    }
    return (
        <div className="md:mx-10 mt-0 mb-3 px-5 py-10 bg-white shadow-md rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Paciente: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex lg:justify-end gap-2 justify-center">
                <button
                    type="button"
                    className="py-2 px-5 lg:px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)} /* Se coloca como arrow function porqué espera a que suceda el evento, de lo contrario si solo pusieramos setPaciente, se ejecutaría sin si quiera dar clic en editar, únicamente al enviar el formulario bastaría para que se ejcute, esto porqué tiene argumento, sin argumento no habría ese problema (se llama callback a esa forma de escribir código) */
                >Editar</button>
                
                <button
                    type="button"
                    className="py-2 px-5 lg:px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar} /* Espera a que suceda, si se le pusiera un parentesis se ejecuta de inmediato */
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente