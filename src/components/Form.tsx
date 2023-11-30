import React, { useState } from 'react';

function Form() {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');

  const handleRegister = () => {
    console.log('Nome do Serviço:', serviceName);
    console.log('Login:', login);
    console.log('Senha:', password);
    console.log('URL:', url);
  };

  const handleCancel = () => {
    console.log('');
  };

  return (
    <div>
      <label>
        Nome do serviço:
        <input
          type="text"
          value={ serviceName }
          onChange={ (e) => setServiceName(e.target.value) }
        />
      </label>

      <label>
        Login:
        <input type="text" value={ login } onChange={ (e) => setLogin(e.target.value) } />
      </label>

      <label>
        Senha:
        <input
          type="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>

      <label>
        URL:
        <input
          type="text"
          value={ url }
          onChange={ (e) => setUrl(e.target.value) }
        />
      </label>

      <button onClick={ handleRegister }>Cadastrar</button>
      <button onClick={ handleCancel }>Cancelar</button>
    </div>
  );
}

export default Form;
