import React, { useState, useContext } from "react";

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const renderCalendarDays = () => {
    const days = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDay; i++) {
      const date = new Date(year, month, i);

      days.push(
        <Day key={date.getTime()} date={date}>
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

  return (
    <div className={"flex-1 text-base-100 rounded-lg shadow-md p-4 m-2"}>
      <div className="flex justify-between mb-2">
        <button onClick={handlePrevMonth}>{"<"}</button>
        <div>
          <h3 className="text-center capitalize font-semibold col-span-4">
            {currentDate.toLocaleDateString(undefined, {
              month: "long",
            })}
          </h3>
          <span className="text-sm">
            {currentDate.toLocaleDateString(undefined, {
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

export default function Day({ children, date }) {
  const { setCurrentDay } = Date.now();

  return (
    <div
      className={"text-base-100 hover:text-secondary cursor-pointer"}
      onClick={() => date !== undefined && setCurrentDay(date)}
    >
      {children}
    </div>
  );
}
