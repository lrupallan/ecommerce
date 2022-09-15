import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './components/context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
      <Header/>
      <Main test="Comision 37080"/>
      <Footer/>
    </BrowserRouter>
    </CartProvider>
    
  );
};

export default App;


