import React from 'react';

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div style={{marginTop: '20px', marginBottom: '20px'}}>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre'/>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Form;