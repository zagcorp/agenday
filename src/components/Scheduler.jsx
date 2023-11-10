import React, { useState, useContext } from "react";
import { Login } from "./Login.jsx";
import { SelectService } from "./SelectService.jsx";
import { Calendar } from "./Calendar.jsx";
import { SelectHour } from "./SelectHour.jsx";
import DateContext from './contexts/DateContext';

export function Scheduler() {
  const [date, setDate] = useState(useContext(DateContext).date);
  let [schedulerStep, setSchedulerStep] = useState(1);

  function updateSchedulerStep() {
    setSchedulerStep((schedulerStep += schedulerStep));
  }

  return (
    <div className="relative w-full overflow-hidden mx-auto max-w-6xl text-center bg-neutral sm:rounded-2xl">
      <div className="w-full h-full">
        {schedulerStep === 1 && (
          <div className="sm:flex h-full origin-right overflow-y-auto">
            <SelectService updateSchedulerStep={updateSchedulerStep} />
            <Login />
          </div>
        )}
        {schedulerStep === 2 && (
        <div className="flex justify-between">
          <DateContext.Provider value={{date, setDate}}>
            <Calendar />
            <SelectHour /> 
          </DateContext.Provider>
        </div>
        )}
      </div>
    </div>
  );
}
