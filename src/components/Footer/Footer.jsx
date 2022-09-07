import estilos from './footer.module.css';
import Navbar from '../Navbar/Navbar';

const Footer = () => {
  return (
    <footer className={estilos.contenedorMain}>
          <Navbar className={estilos.menuFooter} isFooter={false} />
          <h5 className={estilos.nombre}>Luciana Rupallan 2022</h5>
      </footer>
  )
}

export default Footer