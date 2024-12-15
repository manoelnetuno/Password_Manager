type RegPassProps = {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
  function RegPass({ setShowForm }: RegPassProps) {
    const handlegenerateForm = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setShowForm(true);
    };
    return (
      <div>
        <button onClick={ handlegenerateForm }>Cadastrar nova senha</button>
      </div>
    );
  }
  
  export default RegPass;