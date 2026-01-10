function Funcionario({nome, setor = "produção", salario = 1500, children, bomFuncionario = false,  ...rest}){
    
    const dizerOi = (mensagem, event) => {
        alert(mensagem)
        console.log(mensagem, event)
    }

  return(


    <>
    <p>Meu nome é {nome} -- trabalho no setor de {setor} -- salario R${salario} {rest.entrada && ' -- Entrada : ' + rest.entrada }</p>
    {
        bomFuncionario &&
        <p>Vou receber um aumento</p>
    }
    <button onClick={(event) => dizerOi('meu nome é ' + nome, event)}>dizer oi</button>
    <p>{children}</p>
    </>
  )
}

export default Funcionario;