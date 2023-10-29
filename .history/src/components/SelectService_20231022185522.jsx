import React, { useState } from "react";
import Card from "./Card.jsx";
import Login from "./Login.jsx";

export function SelectService() {
  const [etapa, setEtapa] = useState(0); // 0: Seleção de serviço, 1: Login
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

  const servicos = ["Serviço A", "Serviço B", "Serviço C"];

  return (
    <div className="flex flex-col justify-center items-center basis-8/12 w-full py-14 px-14">
      <h2 className="title-font mb-4 text-base-100">SERVIÇO</h2>
      {etapa === 0 ? (
        <>
          <div className="flex">
            <div className="flex w-full space-x-4">
              {servicos.map((servico) => (
                <Card
                  key={servico}
                  title={servico}
                  onClick={() => selecionarServico(servico)}
                ></Card>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={retrocederEtapa}
              disabled={etapa === 0}
            >
              Anterior
            </button>
            <button
              onClick={avancarEtapa}
              disabled={!servicoSelecionado}
            >
              Próximo
            </button>
          </div>
          <Login/>
        </>
      )}
  
      
    </div>
  );}