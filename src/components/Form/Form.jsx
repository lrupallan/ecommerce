import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, {useState} from 'react';
import { db } from '../../firebaseConfig';
import estilos from '../Form/form.module.css';

const Form = ({cart, total, clearCart, handleId}) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      buyer: { nombre: nombre, apellido: apellido, direccion: direccion, email: email },
      items: cart,
      total: total,
      date: serverTimestamp()
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((resp)=> {
      handleId(resp.id);
      clearCart();
    })
  };

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  }

  const handleChangeDireccion = (event) => {
    setDireccion(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  

  return (
    <div className={estilos.mainContainer} style={{marginTop: '20px', marginBottom: '20px'}}>
      <form action="" onSubmit={handleSubmit}>
        <input 
        className={estilos.input} 
        type="text" 
        name="nombre"
        placeholder='Nombre' 
        value={nombre}
        required 
        onChange={handleChangeNombre}/>

        <input 
        className={estilos.input} 
        type="text" 
        placeholder='Apellido'
        value={apellido}
        name='apellido' 
        required 
        onChange={handleChangeApellido}/>

        <input  
        className={estilos.input} 
        type="text" 
        placeholder='Direccion'
        value={direccion}
        name='direccion' 
        required
        onChange={handleChangeDireccion}/>
        
        <input 
        className={estilos.input} 
        type="email" 
        placeholder='email@ejemplo.com' 
        value={email}
        name='email'
        required
        onChange={handleChangeEmail}/>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Form;