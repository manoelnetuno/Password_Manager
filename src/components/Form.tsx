import { useState } from 'react';
import Swal from 'sweetalert2';

type ServicePropsType = {
  serviceName: string;
  login: string;
  password: string;
  URL: string;
};

type FormProps = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setServiceData: React.Dispatch<React.SetStateAction<ServicePropsType[]>>;
  servicesData: ServicePropsType[];
};

function Form({ setShowForm, setServiceData, servicesData }: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [URL, setURL] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const saveServiceData = () => {
    const newServiceData = { serviceName, login, password, URL };
    setServiceData([...servicesData, newServiceData]);
    Swal.fire({
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isButtonDisabled = !serviceName || !login
    || password.length < 8
    || password.length > 16
    || !/\d/.test(password)
    || !/[a-zA-Z]/.test(password)
    || !/[^a-zA-Z0-9]/.test(password);

  const isValidLength = password.length >= 8;
  const isValidMaxLength = password.length <= 16;
  const hasLettersAndNumbers = /[a-zA-Z]/.test(password) && /\d/.test(password);
  const hasSpecialCharacter = /[^a-zA-Z0-9]/.test(password);

  return (
    <form>
      <label htmlFor="serviceName">Nome do serviço</label>
      <input
        id="serviceName"
        type="text"
        value={serviceName}
        onChange={(event) => setServiceName(event.target.value)}
      />
      <label htmlFor="login">Login</label>
      <input
        id="login"
        type="text"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <label htmlFor="password">Senha</label>
      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        type="button"
        data-testid="show-hide-form-password"
        onClick={toggleShowPassword}
      >
        {showPassword ? 'Esconder' : 'Mostrar'}
      </button>

      <div>
        {isValidLength ? (
          <p className="valid-password-check">Possuir 8 ou mais caracteres</p>
        ) : (
          <p className="invalid-password-check">Possuir 8 ou mais caracteres</p>
        )}
        {isValidMaxLength ? (
          <p className="valid-password-check">Possuir até 16 caracteres</p>
        ) : (
          <p className="invalid-password-check">Possuir até 16 caracteres</p>
        )}
        {hasLettersAndNumbers ? (
          <p className="valid-password-check">Possuir letras e números</p>
        ) : (
          <p className="invalid-password-check">Possuir letras e números</p>
        )}
        {hasSpecialCharacter ? (
          <p className="valid-password-check">Possuir algum caractere especial</p>
        ) : (
          <p className="invalid-password-check">Possuir algum caractere especial</p>
        )}
      </div>
      <label htmlFor="URL">URL</label>
      <input
        id="URL"
        type="text"
        value={URL}
        onChange={(event) => setURL(event.target.value)}
      />
      <button
        disabled={isButtonDisabled}
        onClick={() => {
          saveServiceData();
          setShowForm(false);
        }}
        type="button"
      >
        Cadastrar Nova Senha
      </button>
      <button onClick={() => setShowForm(false)}>Cancelar</button>
    </form>
  );
}

export default Form;