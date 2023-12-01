import React from 'react';

type ServiceProps = {
  Sen: {
    serviceName: string;
    login: string;
    password: string;
    url: string;
  };
  setServices: React.Dispatch<React.SetStateAction<{
    serviceName: string;
    login: string;
    password: string;
    url: string }[]>>;
};

function ServiceList({ Sen, setServices }: ServiceProps) {
  const handleRemoveService = (e: React.MouseEvent) => {
    e.preventDefault();
    setServices((prev) => prev.filter((senha) => senha.serviceName !== Sen.serviceName));
  };

  return (
    <ul>
      <li key={ Sen.serviceName }>
        <a href={ Sen.url }>{Sen.serviceName}</a>
        <p>{Sen.login}</p>
        <p>{Sen.password}</p>
        <button data-testid="remove-btn" onClick={ handleRemoveService }>
          Remover Serviço
        </button>
      </li>
    </ul>
  );
}

export default ServiceList;
