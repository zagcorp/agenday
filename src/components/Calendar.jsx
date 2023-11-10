import React, { useState, useEffect, useContext } from "react";
import DateContext from './contexts/DateContext';
import DateUtils from '../utils/DateUtils'

export function Calendar() {
  const { date, setDate } = useContext(DateContext);

  const [availableDates, setAvailableDates] = useState([]);

  // TODO: trocar o serviço conforme o clique no card
  const service = 1;
  
  useEffect(() => {
    fetch(`http://localhost:8080/agendamentos/servicos/${service}/dias-disponiveis?inicio=${getFirstDate()}&fim=${getLastDate()}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // TODO: não consegui fazer a desgraça do spring retornar a data certo então vai ficar assim por enquanto
      setAvailableDates(data.map(x => new Date(x[0], x[1] - 1, x[2])));
    })
    .catch((err) => {
      setAvailableDates([]);
    });
  }, [availableDates]);

  const handlePrevMonth = () => {
    setDate(
      new Date(date.getFullYear(), date.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setDate(
      new Date(date.getFullYear(), date.getMonth() + 1, 1)
    );
  };

  const renderCalendarDays = () => {
    const days = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDay; i++) {
      const date = new Date(year, month, i);

      days.push(
        <Day 
          key={date.getTime()} 
          date={date} setDate={setDate} 
          available={availableDates.some(x => DateUtils.formatDate(x) === DateUtils.formatDate(date))}>
          {i}
        </Day>
      );
    }

    const firstDay = new Date(year, month, 1).getDay();

    for (let i = 0; i < firstDay; i++) {
      days.unshift(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    return days;
  };

  const getFirstDate = () => {
    return DateUtils.formatDate(new Date(date.getFullYear(), date.getMonth(), 1));
  }

  const getLastDate = () => {
    return DateUtils.formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0));
  }

  return (
    <div className="flex-1 flex flex-col justify-center text-base-100 rounded-l-lg p-4 bg-neutral">
      <div className="flex justify-between mb-2">
        <button onClick={handlePrevMonth}>{"<"}</button>
        <div>
          <h3 className="text-center capitalize font-semibold col-span-4">
            {date.toLocaleDateString(undefined, {
              month: "long",
            })}
          </h3>
          <span className="text-sm">
            {date.toLocaleDateString(undefined, {
              year: "numeric",
            })}
          </span>
        </div>
        <button className="p-2" onClick={handleNextMonth}>
          {">"}
        </button>
      </div>
      <div className="row-span-2 col-span-4 grid grid-cols-7 gap-2">
        <div className="badge-primary rounded-lg px-4">D</div>
        <div className="badge-primary rounded-lg px-4">S</div>
        <div className="badge-primary rounded-lg px-4">T</div>
        <div className="badge-primary rounded-lg px-4">Q</div>
        <div className="badge-primary rounded-lg px-4">Q</div>
        <div className="badge-primary rounded-lg px-4">S</div>
        <div className="badge-primary rounded-lg px-4">S</div>
        {renderCalendarDays()}
      </div>
    </div>
  );
}

export default function Day({ children, date, setDate, available }) {
  return (
    <div
      // TODO: vai ficar esse green por enquanto msm kkkkkk
      className={"text-base-100 hover:text-secondary cursor-pointer"} style={available ? {color: "green"} : null}
      onClick={() => date !== undefined && setDate(date)}
    >
      {children}
    </div>
  );
}
