import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Main test="Comision 37080"/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;


