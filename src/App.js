import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main';
import Counter from './components/Counter/Counter';

const App = () => {
  return (
    <>
      <Header/>
      <Main test="Comision 37080"/>
      <Counter stock={10}/>
      <Footer/>
    </>
  );
};

export default App;


