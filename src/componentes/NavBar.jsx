import { CartWidget } from './CartWidget'

export const NavBar = () => {
  return (
    <>
      <p href="#">Olympian Tech Hub</p>
      <div className='Categorias'>
        <a href="#">Dispositivos Móviles</a>
        <a href="#">Electrodomésticos y Tecnología para el Hogar</a>
        <a href="#">Computadoras y Accesorios</a>
      </div>
      <CartWidget />
    </>
  );
}
