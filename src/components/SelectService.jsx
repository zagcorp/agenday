import { useState, useEffect } from "react";
import Card from "./Card.jsx";

export function SelectService({nextStep}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/empresas/1/servicos')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setCards(data.map(x => 
        <Card 
          nextStep={nextStep} 
          id={x.id}
          title={x.nome} 
          image={(x.midias != null && x.midias.length > 0) ? x.midias[0].foto : null}
        />));
    })
    .catch((err) => {
      setCards([
        <Card nextStep={nextStep} title="TÍTULO"></Card>,
        <Card nextStep={nextStep} title="TÍTULO"></Card>,
        <Card nextStep={nextStep} title="TÍTULO"></Card>
      ]);
    });
  }, []);

  return (
    <div className="flex-1 flex flex-col justify-center p-4 sm:p-0 overflow-y-auto bg-neutral sm:rounded-l-xl">
      <h2 className="title-font mb-4 text-base-100">SERVIÇO</h2>
        <div className="flex flex-wrap w-full justify-center md:items-center gap-3">
          {cards}
        </div>
    </div>
  );
}
