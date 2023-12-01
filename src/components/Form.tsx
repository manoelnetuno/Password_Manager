import React, { useState } from 'react';

type FormProps = {
  onCancel: () => void;
  onRegister: (data: {
    serviceName: string;
    login: string;
    password: string;
    url: string;
  }) => void;
  setServicesList: React.Dispatch<React.SetStateAction<{ serviceName: string,
    login: string,
    password: string,
    url:string, }[]>>,
  services: {
    serviceName: string;
    login: string;
    password: string;
    url: string;
  }[];
};
function Form({ onCancel, onRegister, services, setServicesList }: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [hidePasswords, setHidePasswords] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    serviceName: string;
    login: string;
    password: string;
    url: string;
  } | null>(null);

  const BottomDisabled = !serviceName
  || !login
  || password.length < 8
  || password.length > 16
  || !/[a-zA-Z]/.test(password)
  || !/\d/.test(password)
  || !/[^a-zA-Z0-9]/.test(password);

  const handleRegister = () => {
    const displayedPassword = hidePasswords ? '******' : password;

    const data = {
      serviceName,
      login,
      password: displayedPassword,
      url,
    };

    setSubmittedData(data);
    onRegister(data);
  };

  const handleCancel = () => {
    onCancel();
  };
  const PasswordValidation = (condition: boolean) => {
    return condition ? 'valid-password-check' : 'invalid-password-check';
  };
  const toggleHidePasswords = () => {
    setHidePasswords(!hidePasswords);
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
      <label>
        Esconder senhas
        <input
          type="checkbox"
          checked={ hidePasswords }
          onChange={ toggleHidePasswords }
        />
      </label>
      <button
        onClick={ (e) => {
          e.preventDefault();
          setServicesList([...services, { serviceName, login, password, url }]);
          handleRegister();
        } }
        disabled={ BottomDisabled }
      >
        Cadastrar

      </button>
      <button onClick={ handleCancel }>Cancelar</button>
      {submittedData && (
        <div>
          <h2>Informações Cadastradas:</h2>
          <p>
            Nome do Serviço:
            {' '}
            {submittedData.serviceName}
          </p>
          <p>
            Login:
            {' '}
            {submittedData.login}
          </p>
          <p>
            Senha:
            {' '}
            {submittedData.password}
          </p>
          <p>
            URL:
            {' '}
            {submittedData.url}
          </p>
        </div>
      )}
      {services.length > 0 && (
        <div>
          <h2>Serviços Cadastrados:</h2>
          {services.map((service, index) => (
            <div key={ index }>
              <p>
                Nome do Serviço:
                {' '}
                {service.serviceName}
              </p>
              <p>
                Login:
                {' '}
                {service.login}
              </p>
              <p>
                Senha:
                {' '}
                {service.password}
              </p>
              <p>
                URL:
                {' '}
                {service.url}
              </p>
            </div>
          ))}
        </div>
      )}

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
      {submittedData && (
        <div>
          <h2>Informações Cadastradas:</h2>
          <p>
            Nome do Serviço:
            {' '}
            {submittedData.serviceName}
          </p>
          <p>
            Login:
            {' '}
            {submittedData.login}
          </p>
          <p>
            Senha:
            {' '}
            {submittedData.password}
          </p>
          <p>
            URL:
            {' '}
            {submittedData.url}
          </p>
        </div>
      )}
    </div>
  );
}
export default Form;
