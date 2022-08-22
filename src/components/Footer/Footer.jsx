import estilos from './footer.module.css';
import Navbar from '../Navbar/Navbar';

const Footer = () => {
  return (
    <footer className={estilos.contenedorMain}>
          <Navbar/>
          <h5>Luciana Rupallan 2022</h5>
      </footer>
  )
}

export default Footer