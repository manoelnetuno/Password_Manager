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
    url: string;
  }[]>>;
  HideSenha: boolean; // Alterado para corresponder à propriedade correta
};

function ServiceList({ Sen, setServices, HideSenha }: ServiceProps) {
  const handleRemoveService = (e: React.MouseEvent) => {
    e.preventDefault();
    setServices((prev) => prev.filter((senha) => senha.serviceName !== Sen.serviceName));
  };

  return (
    <li key={ Sen.serviceName }>
      <a href={ Sen.url }>{Sen.serviceName}</a>
      <p>{Sen.login}</p>
      <p>{HideSenha ? '******' : Sen.password}</p>
      {' '}
      {/* Alterado para corresponder à propriedade correta */}
      <button data-testid="remove-btn" onClick={ handleRemoveService }>
        Remover Serviço
      </button>
    </li>
  );
}

export default ServiceList;
