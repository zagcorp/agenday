import Card from "./Card.jsx";
import { Login } from "./Login.jsx";
import React, { useState } from 'react';
import { Button } from 'rsuite';

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

  return (

    <div className="flex flex-col justify-center items-center basis-8/12 w-full py-14 px-14">
      <h2 className="title-font mb-4 text-base-100">SERVIÇO</h2>
      <div className="flex">
        <div className="flex w-full space-x-4">
            
        <div>
          
          <ul>
            {servicos.map((servico, index) => (
              <li key={index}>
                <Button onClick={() => selecionarServico(servico)}>
                  {servico}
                </Button>
              </li>
            ))}
          </ul>
          <Button onClick={avancarEtapa} disabled={!servicoSelecionado}>
            Próximo
          </Button>
        </div>
            
        </div>
      </div>
    </div>
  );
}
function SelectService() {


 

  const servicos = [
    <Card title="Casamento"></Card>,
    <Card title="Leve"></Card>,
    <Card title="Festa"></Card>
  ];

  return (
    <div>
      
      {etapa === 0 && (
        // Etapa 1: Escolha do Serviço
        
      )}

      {etapa === 1 && (
        // Resto do código do componente
      )}
    </div>
  );
}

export default SelectService;






