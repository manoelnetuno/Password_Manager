import React, { useState } from 'react';

interface FormProps {
  onCancel: () => void;
}
function Form({ onCancel }: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');

  const BottomDisabled = !serviceName
  || !login
  || password.length < 8
  || password.length > 16
  || !/[a-zA-Z]/.test(password)
  || !/\d/.test(password)
  || !/[^a-zA-Z0-9]/.test(password);

  const handleRegister = () => {
    console.log('Nome do Serviço:', serviceName);
    console.log('Login:', login);
    console.log('Senha:', password);
    console.log('URL:', url);
  };
  const handleCancel = () => {
    onCancel();
  };
  const PasswordValidation = (condition: boolean) => {
    return condition ? 'valid-password-check' : 'invalid-password-check';
  };
  return (
    <div>
      <label>
        Nome do serviço:
        <input
          type="text"
          value={ serviceName }
          onChange={ (e) => {
            setServiceName(e.target.value);
          } }
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

      <button onClick={ handleRegister } disabled={ BottomDisabled }>Cadastrar</button>
      <button onClick={ handleCancel }>Cancelar</button>

      <div className={ PasswordValidation(password.length >= 8) }>
        Possuir 8 ou mais caracteres
      </div>
      <div className={ PasswordValidation(password.length <= 16) }>
        Possuir até 16 caracteres
      </div>
      <div className={ PasswordValidation(/[a-zA-Z]/.test(password) && /\d/.test(password)) }>
        Possuir letras e números
      </div>
      <div className={ PasswordValidation(/[^a-zA-Z0-9]/.test(password)) }>
        Possuir algum caractere especial
      </div>
    </div>
  );
}
export default Form;
