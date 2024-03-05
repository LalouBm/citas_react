/* Al momento de crear un componente, el archivo debe iniciar con mayúscula */

//Un componente es una función
function Header({tomaValor}){
    
    
    return(/* Siempre debe llevar un return */
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">{/* md:propiedad (Agrega un media query) */}
                Seguimiento Pacientes {""}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
    )
}

//Siempre debe exportarse
export default Header;