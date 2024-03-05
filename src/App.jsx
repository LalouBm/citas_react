/*
  Un archivo jsx es la abreviación de JavaScript Syntax Extension
  En el nivel más alto, siempre debe retornarse un elemento div, no elementos como h1, p, etc.
*/


//Importar componentes
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {


  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});/* Este estado sirve para el botón Editar */

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; /* Este código dice que si el localstorage está vacío, en lugar de que el resultado sea null, se agrege un arreglo vacío */
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, []) /* Cuando el arreglo de dependencias está vacío quiere decir que se ejecute una sola vez y esa única vez es cuando el componente está listo */

  useEffect(() => {/* Cada que se detecte un cambio en el estado de pacientes, se va a guardar en el local storage lo del arreglo */
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  /*Aquí puedes escribir código JS sin problemas */
  
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    
    <>{/* Fragment, es equivalente a un div */}
    {/* Aquí se escriben expresiones (ternario, ), cuando se colocan llaves alrededor del código, como si fueran etiquetas de servidor */}
    <div className="container mx-auto mt-10">
      <Header/>{/* Utilizar un componente */}
      <div className="mt-12 mx-2 md:mx-10 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente} /* Para botón editar */
          setPaciente={setPaciente} /* Para botón editar */
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente} /* Para botón editar */
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
    </>/* Fragment, es equivalente a un div */
  )
}

export default App
