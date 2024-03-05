
const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 mb-5 uppercase font-bold rounded-md'>
        {children}{/* Otra forma de pasar props */}
    </div>
  ) 
}

export default Error