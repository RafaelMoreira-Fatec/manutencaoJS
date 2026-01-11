import { useState } from 'react';
import './App.css'
import Funcionario from './components/Funcionario';

// function App() {

//   return (
//     <>
//       <h1>Hello world</h1>
//     </>
//   )
// }

// function kwtohp(kw) {
//   return kw * 1.36;
// }

// function Car() {

//   // const hp = 218 * 1.36;

//     const myobj = {
//     name: "Fiat",
//     model: "500",
//     color: "white"
//   };

//   return (
//     <>
//       {/* <h1>My car</h1>
//       <p>It has {kwtohp(218)} horsepower</p> */}
//       <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
//     </>
//   );
// }

// function Pessoa() {

//   const pessoa = {
//     nome: "Rafael",
//     idade: 26,
//     trabalho: "Soldador",
//     hobbie: "Tenis de mesa",
//     salario: 1000
//   }

//   const estaEmpregado = true

//   const background = "myClass";

//   // const mystyles = {
//   //   backgroundColor: 'red',
//   //   fontSize: '2em'
//   // }

//   // const testeBtn = () => {
//   //   alert('Olá')
//   // }

//   const showParagraph = {
//     display: estaEmpregado ? 'block' : 'none'
//   }


//   return (


//    <>
//    {/* <p className='myClass'> */}
//    <p className={ background}>

//     Meu nome é {pessoa.nome} tenho {pessoa.idade}, { estaEmpregado ? 'trabalho como ' + pessoa.trabalho : 'no momento estou desempregado'} e minha atividade favorita é {pessoa.hobbie}
//    </p>
//    <p style={showParagraph}>meu salario é {pessoa.salario}</p>

//    {/* <button onClick={testeBtn} style={mystyles}>
//     Teste
//    </button> */}
//     </>
//   )
// }



function Empresa() {


  const [inputs, setInputs] = useState({});

  const sobremesas = [
    'Chocolate',
    'Pudim',
    'Doce de leite',
    'Torta'
  ]

  // const [mensagem, setMensagem] = useState("");
  // const [sobremesa, setSobremesa] = useState(sobremesas[0]);

  const funcionarios = [
    {
      id: 1,
      nome: "Rafael",
      setor: "produção",
      salario: 1800,
      bomFuncionario: true,
      entrada: "6AM"
    },
    {
      id: 2,
      nome: "Lucas",
      setor: "compras",
      salario: 2200,
      bomFuncionario: false,
      entrada: "7AM"
    },
    {
      id: 3,
      nome: "Elton",
      setor: "entregas",
      salario: 3000,
      bomFuncionario: true,
      entrada: "2PM"
    },
    {
      id: 4,
      nome: "Marcos",
      setor: "produção",
      salario: 1600,
      bomFuncionario: false,
      entrada: "5AM"
    },
    {
      id: 5,
      nome: "Fernanda",
      setor: "RH",
      salario: 2800,
      bomFuncionario: true,
      entrada: "8AM"
    },
    {
      id: 6,
      nome: "Ana",
      setor: "financeiro",
      salario: 3500,
      bomFuncionario: true,
      entrada: "9AM"
    },
    {
      id: 7,
      nome: "Carlos",
      setor: "manutenção",
      salario: 2500,
      bomFuncionario: false,
      entrada: "6AM"
    },
    {
      id: 8,
      nome: "Bruno",
      setor: "logística",
      salario: 2700,
      bomFuncionario: true,
      entrada: "1PM"
    },
    {
      id: 9,
      nome: "Juliana",
      setor: "compras",
      salario: 2300,
      bomFuncionario: false,
      entrada: "7AM"
    },
    {
      id: 10,
      nome: "Paula",
      setor: "produção",
      salario: 1900,
      bomFuncionario: true,
      entrada: "5AM"
    }
  ];



  const funcionariosComMaiorSalario = funcionarios.filter(funcionario => funcionario.salario > 2500)

  // const genrenciaFormulario = (event) => {
  //   console.log(mensagem)
  //   setMensagem(event.target.value);
  // }

  // const genrenciaFormulario2 = (event) => {
  //   setSobremesa(event.target.value);
  //   console.log(sobremesa)
  // }

  const handleInputs = (event) => {
    const name = event.target.type === 'checkbox' ? event.target.checked : event.target.name;
    const value = event.target.value;

    console.log(inputs)
    setInputs(values => ({ ...values, [name]: value }))

  }

  const gerenciaEnvioDeFormulario = (event) => {
    console.log(event)
    event.preventDefault();
    alert(inputs);
  }

  return (
    <>

      <div>
        <form
          onSubmit={gerenciaEnvioDeFormulario}
        >
          <label htmlFor="mensagem">Mensagem aos funcionarios:</label>
          {/* <input type="text" id="mensagem" value={mensagem}
      onChange={genrenciaFormulario}
      /> */}
          <textarea name="mensagem" id="mensagem" value={inputs.mensagem} onChange={handleInputs} />

          <select value={inputs.sobremesa} onChange={handleInputs} name="sobremesa">
            {
              sobremesas.map((sobremesa, index) => <option value={sobremesa} key={index}>{sobremesa}</option>)
            }
          </select>
          <br />
          <label>Itens a comprar</label><br />
          <label htmlFor="caneta">
            <input type="checkbox" name="caneta" id="caneta" value={inputs.caneta}/> caneta
          </label>
          <br />
          <label htmlFor="lapis">
            <input type="checkbox" name="lapis" id="lapis"  value={inputs.lapis}/> lapis
          </label>
          <br />
          <label htmlFor="borracha">
            <input type="checkbox" name="borracha" id="borracha"  value={inputs.borracha}/> borracha
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
        <p>
          Mensagem: {inputs.mensagem}
        </p>
        <p>
          sobremesa: {inputs.sobremesa}
        </p>
      </div>

      {funcionarios.map((funcionario) => (
        <Funcionario
          key={funcionario.id}
          nome={funcionario.nome}
          setor={funcionario.setor}
          salario={funcionario.salario}
          bomFuncionario={funcionario.bomFuncionario}
          entrada={funcionario.entrada}
        >
          <span>
            {funcionario.bomFuncionario
              ? "Funcionário destaque"
              : "Funcionário em avaliação"}
          </span>
        </Funcionario>
      ))}

      <h1>maiores salarios</h1>
      {funcionariosComMaiorSalario.map((funcionario) => (
        <Funcionario
          key={funcionario.id}
          nome={funcionario.nome}
          setor={funcionario.setor}
          salario={funcionario.salario}
          bomFuncionario={funcionario.bomFuncionario}
          entrada={funcionario.entrada}
        >
          <span>
            {funcionario.bomFuncionario
              ? "Funcionário destaque"
              : "Funcionário em avaliação"}
          </span>
        </Funcionario>
      ))}
    </>
  )
}



export default Empresa;
