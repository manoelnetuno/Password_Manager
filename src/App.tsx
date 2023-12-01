import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Servicelist from './components/Service';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<{ serviceName: string,
    login: string,
    password: string,
    url:string, }[]>([]);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };
  const handleRegisterService = (service: any) => {
    setServices([...services, service]);
    handleHideForm();
  };
  return (
    <>
      <div>
        <h1> Gerenciador de senhas </h1>
      </div>
      <div>
        {showForm ? (
          <Form
            onCancel={ handleHideForm }
            onRegister={ handleRegisterService }
            services={ services }
            setServicesList={ setServices }
          />
        ) : (
          <button onClick={ handleShowForm }>Cadastrar nova senha</button>
        )}
        {services.length === 0 ? (<p>Nenhuma senha cadastrada</p>) : (
          services.map((password, index) => (<Servicelist
            setServices={ setServices }
            key={ index }
            Sen={ password }
          />)))}
      </div>
    </>
  );
}
export default App;
