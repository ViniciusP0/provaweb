import Button from "./Button"
import SayName from "./SayName";
import Perfil from "./Perfil";
import HelloWorld from "./HelloWorld";
function App() {
  const lista_pessoas =[{
    nome:'12/03/2022',
    num : 'nota da historia'

  },
  {
 nome: '12/03/2022',
 num: 'mais uma vez um texto que eu preciso preencher'
  },
  ];

  return (
    <div className="principal">
      <HelloWorld/>
      <SayName nome=""/>
      {
        lista_pessoas.map( (pessoa) =>{
          return <Perfil  num={pessoa.num} nome={pessoa.nome} />

        } ) }
    </div>
  );

}

export default App;
