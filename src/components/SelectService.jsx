import { useState, useEffect } from "react";
import Card from "./Card.jsx";

export function SelectService({updateSchedulerStep}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/empresas/1/servicos')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setCards(data.map(x => 
        <Card 
          updateSchedulerStep={updateSchedulerStep} 
          title={x.nome} 
          image={(x.midias != null && x.midias.length > 0) ? x.midias[0].foto : null}
        />));
    })
    .catch((err) => {
      setCards([
        <Card updateSchedulerStep={updateSchedulerStep} title="TÍTULO"></Card>,
        <Card updateSchedulerStep={updateSchedulerStep} title="TÍTULO"></Card>,
        <Card updateSchedulerStep={updateSchedulerStep} title="TÍTULO"></Card>
      ]);
    });
  }, []);

  return (
    <div className="flex flex-col xl:py-20 lg:p-14 md:p-10 p-6 w-full overflow-y-auto">
      <h2 className="title-font mb-4 text-base-100">SERVIÇO</h2>
        <div className="flex flex-wrap w-full justify-center md:items-center gap-3">
          {cards}
        </div>
    </div>
  );
}
