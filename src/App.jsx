import  'react'
import './App.css'
import { NavBar } from './componentes/NavBar'
import { ItemListContainer } from './componentes/ItemListContainer'
function App() {
  return (
    <>
      <div className="Barra_Superior">
        <NavBar />
      </div>
        <ItemListContainer greeting="Bienvenido a nuestra tienda!" />
    </>
  )
}

export default App
