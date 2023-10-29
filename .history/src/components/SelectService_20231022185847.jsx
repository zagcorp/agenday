import React, { useState } from "react";
import Card from "./Card.jsx";
import Login from "./Login.jsx";

export function SelectService() {
  const [etapa, setEtapa] = useState(0); // Controla a etapa do agendamento
  const [servicoSelecionado, setServicoSelecionado] = useState(null);
  const [profissionalSelecionado, setProfissionalSelecionado] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [agendamentoFeito, setAgendamentoFeito] = useState(false);

  const avancarEtapa = () => {
    if (etapa < 3) {
      setEtapa(etapa + 1);
    }
  };

  const retrocederEtapa = () => {
    if (etapa > 0) {
      setEtapa(etapa - 1);
    }
  };

  const selecionarServico = (servico) => {
    setServicoSelecionado(servico);
  };

  const selecionarProfissional = (profissional) => {
    setProfissionalSelecionado(profissional);
  };

  const selecionarHorario = (horario) => {
    setHorarioSelecionado(horario);
  };

  const finalizarAgendamento = () => {
    setAgendamentoFeito(true);
  };

  const servicos = ["Serviço A", "Serviço B", "Serviço C"];
  const profissionais = ["Profissional A", "Profissional B", "Profissional C"];
  const horarios = ["Horário 1", "Horário 2", "Horário 3"];

  return (
    <div className="flex flex-col justify-center items-center basis-8/12 w-full py-14 px-14">
      <h2 className="title-font mb-4 text-base-100">AGENDAMENTO</h2>
      {etapa === 0 && (
        <div>
          <h2>Escolha o Serviço</h2>
          <ul>
            {servicos.map((servico) => (
              <li key={servico}>
                <button onClick={() => selecionarServico(servico)}>
                  {servico}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {etapa === 1 && (
        <div>
          <h2>Escolha o Profissional</h2>
          <ul>
            {profissionais.map((profissional) => (
              <li key={profissional}>
                <button onClick={() => selecionarProfissional(profissional)}>
                  {profissional}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {etapa === 2 && (
        <div>
          <h2>Escolha o Horário</h2>
          <ul>
            {horarios.map((horario) => (
              <li key={horario}>
                <button onClick={() => selecionarHorario(horario)}>
                  {horario}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {etapa === 3 && (
        <div>
          <h2>Visualização do Agendamento</h2>
          <p>Serviço: {servicoSelecionado}</p>
          <p>Profissional: {profissionalSelecionado}</p>
          <p>Horário: {horarioSelecionado}</p>
          <button onClick={finalizarAgendamento}>Finalizar Agendamento</button>
        </div>
      )}

      {etapa === 4 && (
        <div>
          <h2>Agendamento Concluído</h2>
          <p>Seu agendamento foi concluído com sucesso!</p>
        </div>
      )}

      {etapa !== 4 && etapa !== 1 && (
        <div className="flex space-x-4">
          <button onClick={retrocederEtapa}>Anterior</button>
          <button onClick={avancarEtapa} disabled={!servicoSelecionado}>
            Próximo
          </button>
        </div>
      )}

      {etapa === 1 && (
        <Login />
        {/* Componente de Login na etapa 1 */}
      )}
    </div>
  );
}
