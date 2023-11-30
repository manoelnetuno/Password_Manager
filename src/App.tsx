import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };
  return (
    <>
      <div>
        <h1> Gerenciador de senhas </h1>
      </div>
      <div>
        {showForm ? (
          <Form onCancel={ handleHideForm } />
        ) : (
          <button onClick={ handleShowForm }>Cadastrar nova senha</button>
        )}
      </div>
    </>
  );
}

export default App;
