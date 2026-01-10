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



function Empresa(){

  return(
    <>
    <Funcionario nome="Rafael" setor="entregas" />
    <Funcionario nome="Lucas" setor="compras" />
    </>
  )
}



export default Empresa;
