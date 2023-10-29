import Card from "./Card.jsx";
import { Login } from "./Login.jsx";
import React, { useState } from 'react';

export function SelectService() {
  const [etapa, setEtapa] = useState(0);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);



  return (
    <div className="flex flex-col justify-center items-center basis-8/12 w-full py-14 px-14">
      <h2 className="title-font mb-4 text-base-100">SERVIÇO</h2>
      <div className="flex">
        <div className="flex w-full space-x-4">
            <Card title="TÍTULO"></Card>
            <Card title="TÍTULO"></Card>
            <Card title="TÍTULO"></Card>
        </div>
      </div>
    </div>
  );
}
