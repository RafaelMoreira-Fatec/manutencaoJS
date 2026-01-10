import './App.css'

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

function Pessoa() {

  const pessoa = {
    nome: "Rafael",
    idade: 26,
    trabalho: "Soldador",
    hobbie: "Tenis de mesa"
  }

  const background = "myClass";

  const mystyles = {
    backgroundColor: 'red',
    fontSize: '2em'
  }

  const testeBtn = () => {
    alert('Olá')
  }


  return (


   <>
   {/* <p className='myClass'> */}
   <p className={ background}>
    
    Meu nome é {pessoa.nome} tenho {pessoa.idade}, trabalho como {pessoa.trabalho} e minha atividade favorita é {pessoa.hobbie}
   </p>

   <button onClick={testeBtn} style={mystyles}>
    Teste
   </button>
    </>
  )
}

export default Pessoa;
