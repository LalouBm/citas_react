import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>{/* Se deshabilita el StrictMode si se imprime 2 veces el resultado en consola */}
    <App />
  </>,
)
