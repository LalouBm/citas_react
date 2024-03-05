import Paciente from "./Paciente";
import { useEffect } from "react";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => { /* OJO: Uno es pacientes (arreglo) y el otro es setPaciente (objeto) */
    
    useEffect(() => {
        if(pacientes.length > 0){ /* Se ejectua cada que se añade un nuevo paciente */
            // console.log('Nuevo paciente');
        }
        
    }, [pacientes])

    return(
        
        <div className="md:w-1/2 lg:w-3/5 mx-0">
            {pacientes.length > 0 ? (
                <>
                <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center"> 
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>
                <div className="md:h-screen md:overflow-y-scroll"> {/* overflow-y-scroll, permite que solo este componente tenga scroll en y, y h-screen lo vuelve un componente independiente al que se le puede hacer scroll */}
                    {pacientes.map( paciente => { /* Pasarle el index com key, soluciona el error de 'Each child in a list should have a unique "key" prop' */
                        return(
                            
                        <Paciente
                            // key={index} /* Siempre que se pase un listado .map se debe tene un key único (Aunque usar el índice como el key, es una mala práctica) */
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                        
                        );
                    })}
                </div>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center"> 
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
            
            
        </div>
    )
}

export default ListadoPacientes;