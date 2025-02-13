import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import RegPass from './components/RegPass';

type ServicePropsType = {
  serviceName: string;
  login: string;
  password: string;
  URL: string;
};

function App() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [servicesData, setServicesData] = useState<ServicePropsType[]>([]);
  const [hidePasswords, setHidePasswords] = useState<boolean>(false);
  const [validationMessage, setValidationMessage] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const removeService = (index: number) => {
    const updatedServices = [...servicesData];
    updatedServices.splice(index, 1);
    setServicesData(updatedServices);
  };

  const toggleHidePasswords = () => {
    setHidePasswords(!hidePasswords);
  };

  const validateForm = (serviceName: string, login: string, password: string, URL: string) => {
    if (serviceName && login && password && URL) {
      setValidationMessage('Todos os campos estão preenchidos!');
      setIsValid(true);
    } else {
      setValidationMessage('Por favor, preencha todos os campos!');
      setIsValid(false);
    }
  };

  return (
    <>
      <header>
        <h1>🔒 Gerenciador de senhas 🔒</h1>
      </header>
      <main>
        {showForm ? (
          <Form
            setShowForm={setShowForm}
            setServiceData={setServicesData}
            servicesData={servicesData}
            validateForm={validateForm} // Passando a função de validação
          />
        ) : (
          <RegPass setShowForm={setShowForm} />
        )}
        {validationMessage && (
          <p className={`validation-message ${isValid ? 'validation-success' : 'validation-error'}`}>
            {validationMessage}
          </p>
        )}
        {servicesData.length === 0 && <p>Nenhuma senha cadastrada</p>}
        <input
          type="checkbox"
          id="hidePasswords"
          checked={hidePasswords}
          onChange={toggleHidePasswords}
        />
        <label htmlFor="hidePasswords">Esconder senhas</label>
        <ul>
          {servicesData.length > 0 && servicesData.map((service, index) => (
            <li key={index}>
              <a href={service.URL}>{`${service.serviceName}`}</a>
              <p>{`Login: ${service.login}`}</p>
              <p>{`Senha: ${hidePasswords ? '******' : service.password}`}</p>
              <button
                data-testid="remove-btn"
                onClick={() => {
                  removeService(index);
                }}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;