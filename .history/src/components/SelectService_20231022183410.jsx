import Card from "./Card.jsx";
import { Login } from "./Login.jsx";

export function SelectService() {  
  const [etapa, setEtapa] = useState(0);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  const avancarEtapa = () => {
    setEtapa(etapa + 1);
  };

  const retrocederEtapa = () => {
    setEtapa(etapa - 1);
  };

  const selecionarServico = (servico) => {
    setServicoSelecionado(servico);
  };



  const servicos = [
    'Maquiagem Festa',
    'Maquiagem Média',
    'Maquiagem Leve'
  ];
  

  return (
    <div className="flex flex-col justify-center items-center basis-8/12 w-full py-14 px-14">
      <h2 className="title-font mb-4 text-base-100">SERVIÇO</h2>
      {etapa === 0 &&(
      <div className="flex">
        <div className="flex w-full space-x-4">
            <Card title={servicos[0]}>
              
            </Card>
            <Card title={servicos[1]}></Card>
            <Card title={servicos[2]}></Card>
        </div>
      </div>)}
    </div>
  );
}







