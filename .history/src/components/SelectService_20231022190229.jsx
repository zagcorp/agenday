import Card from "./Card.jsx";
import { useState } from "react";

export function SelectService() {
  const servicos = ["Maquiagem Festa", "Serviço B", "Serviço C"];
  const [etapa, setEtapa] = useState(0);


  return (
    <div className="flex flex-col justify-center items-center basis-8/12 w-full py-14 px-14">
      <h2 className="title-font mb-4 text-base-100">SERVIÇO</h2>
      <div className="flex">
        <div className="flex w-full space-x-4">
            <Card title={servicos[0]}>



            </Card>
            <Card title={servicos[1]}></Card>
            <Card title={servicos[2]}></Card>
        </div>
      </div>
    </div>
  );
}
