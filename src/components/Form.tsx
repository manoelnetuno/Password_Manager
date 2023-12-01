import React, { useState } from 'react';

interface Service {
  serviceName: string;
  login: string;
  password: string;
  url: string;
}

interface FormProps {
  onCancel: () => void;
}

function Form({ onCancel }: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [services, setServices] = useState<Service[]>([]);
  const handleRegister = () => {
    const newService = {
      serviceName,
      login,
      password,
      url,
    };

    setServices([...services, newService]);
    setServiceName('');
    setLogin('');
    setPassword('');
    setUrl('');
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

      <button onClick={ handleRegister }>Cadastrar</button>
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
      <div>
        {services.length === 0 ? (
          <p>Nenhuma senha cadastrada</p>
        ) : (
          <ul>
            {services.map((service, index) => (
              <li key={ index }>
                <strong>{service.serviceName}</strong>
                <br />
                Login:
                {' '}
                {service.login}
                <br />
                Senha:
                {' '}
                {service.password}
                <br />
                <a href={ service.url } target="_blank" rel="noopener noreferrer">
                  Ir para o serviço
                </a>
                <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Form;
