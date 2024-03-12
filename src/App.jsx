import  'react'
import './App.css'
import { NavBar } from './componentes/NavBar'
import { CartWidget } from './componentes/CartWidget'
import { ItemListContainer } from './componentes/ItemListContainer'
function App() {
  return (
    <>
      <div className="Barra_Superior">
        <NavBar />
        <CartWidget />
      </div>
        <ItemListContainer greeting="Bienvenido a nuestra tienda!" />
    </>
  )
}

export default App
