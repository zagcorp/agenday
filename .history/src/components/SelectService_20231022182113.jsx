import Card from "./Card.jsx";
import { Login } from "./Login.jsx";
import React, { useState } from 'react';

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

      {etapa === 0 && (
        // Etapa 1: Escolha do Serviço
        <div>
          <h2>Escolha o Serviço</h2>
          <ul>
            {servicos.map((servico, index) => (
              <li key={index}>
                <button onClick={() => selecionarServico(servico)}>
                  {servico}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={avancarEtapa} disabled={!servicoSelecionado}>
            Próximo
          </button>
        </div>
      )}
      
    </div>
  );
}
