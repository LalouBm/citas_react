//Con la extensión ES7 + React al escribir 'rfce' o 'rafce' se coloca automáticamente la estructura básica de un archivo react


//Importar Hooks
import {useState, useEffect} from 'react';
import Error from './Error';

function Formulario({pacientes, setPacientes, paciente, setPaciente}) { /* OJO paciente es el objeto y se pasa como prop para que el botón editar rellene los campos del formulario con la info del paciente que se quiere editar */

  /* Aquí se declara el estado (y los hooks [1]) */
  /*
    La función siempre modificará el valor de la variable por medio de una función, por lo que su estructura
    debe de ser la siguiente siempre.
  
  */

  /*
    Reglas de los Hooks
    1 Los Hooks deben de colocarse en la parte superior del componente  
    2 No sde deben colocar dentro d econdicionales y tampoco despuésd el return
    
    
   */
  //  [nombreVariable, nombreFuncion]        useState(valorInicial)
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  /* Use effect escucha por los cambios que sucedan en alguna parte de nuestro state */
  useEffect(() => {/* Se ejecuta el render una vez que paciente cambie */
      //console.log(paciente); /* Si colocamos este cógido fuera de useEfect, cada que tecleemos se hace un render aún cuando no ha cambiado el paciente */
      if(Object.keys(paciente).length > 0) {
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setEmail(paciente.email);
        setFecha(paciente.fecha);
        setSintomas(paciente.sintomas);
        
      }
      
  
  }, [paciente]) /* Dentro del arreglo van las dependencias que va a estra revisando cuando cambien, y si lo hacen realiza un render */

  const generarId = () => {/* Hashea un id aleatorio usando una fecha y un número aleatorio (ambos en base 36) */
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

//Nota: Declarar el state conforme se va requiriendo

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Enviando Formulario');
    //Validación
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true);
      return;//Evita que se siga ejecutando el código si no pasa la validación
    } 
    
    //Pasó la validación
    setError(false);


    //Objeto de paciente
    const objetoPaciente = {//No hace falta poner ejemplo nombre: nombre, con poner únicamente el nombre de la propiedad basta, mientras el valor se llame igual que la propiedad
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    /* Detecta si existe el id en paciente (botón editar se presionó) */
    if(paciente.id) {
      //Editando
      objetoPaciente.id = paciente.id;
      console.log(objetoPaciente); /* Versión nueva que está cuando ya se modificó */
      console.log(paciente);/* Versión al dar clic en editar */

      const pacientesActualizados = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? objetoPaciente : pacienteState) /* Por cada paciente en el arreglo pacientes, va a evaluar si el id del paciente dentro del arreglo es el mismo  que el del paciente que se seleccionó para modificar, en caso de que si va a retornar objetoPaciente (modificado), sino el mismo que está dentro del arreglo (sin modificaciones) */

      /* En pocas palabras, detecta el id del que se está modificando y cuando lo encuentre, se le asignarán los nuevos datos a ese paciente, sin modificar en los que no estamos editando */
      console.log(pacientesActualizados);
      setPacientes(pacientesActualizados); /* Se cambia el arreglo con los nuevos datos y se imprime en pantalla */
      setPaciente({}); /* Resetea el objeto paciente para el botón editar */
    } else {
      //Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    

    //Reiniciar el form
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
    
    
  }
  

  return (

    
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">Añade Pacientes y {''} 
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">{/* shadow añade una sombra, ronded redondea las esquinas */}
          {error && <Error> <p>Todos los Campos son Obligatorios</p></Error> } {/* El amperson (&&) dice que solo si error es true imprime algo */}
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre de Mascota
            </label>
            <input 
              id="mascota"
              type="text" 
              placeholder="Nombre Mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={ (e) => setNombre(e.target.value) } /* OnChange es un AddEventListener */
              
            />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre del Propietario
            </label>
            <input 
              id="propietario"
              type="text" 
              placeholder="Nombre Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value) }
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
            </label>
            <input 
              id="email"
              type="email" 
              placeholder="Email del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">
              Fecha de Alta
            </label>
            <input 
              id="Alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={ (e) => setFecha(e.target.value) }
            />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Síntomas
            </label>
            <textarea 
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none h-32"
              placeholder="Describe los síntomas de la mascota"
              value={sintomas}
              onChange={ (e) => setSintomas(e.target.value) }
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value={paciente.id ? "Modificar paciente" : "Agregar Paciente"} /* Detecta si hay algo en paciente (botón editar se presionó) */
          />
      </form>
    </div>
  )
}

export default Formulario