function Funcionario({nome, setor = "produção", salario = 1500, children, ...rest}){

  return(
    <>
    <p>Meu nome é {nome} -- trabalho no setor de {setor} -- salario R${salario} {rest.entrada && ' -- Entrada : ' + rest.entrada }</p>
    <p>{children}</p>
    </>
  )
}

export default Funcionario;