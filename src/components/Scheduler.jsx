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
    <div className="relative w-full sm:h-[60vh] mx-auto text-center sm:rounded-2xl mb-10">
        {schedulerStep === 1 && (
          <div className="sm:flex h-full origin-right overflow-y-auto justify-between">
            <SelectService updateSchedulerStep={updateSchedulerStep} />
            <Login />
          </div>
        )}
        {schedulerStep === 2 && (
        <div className="flex h-full w-full">
          <DateContext.Provider value={{date, setDate}}>
            <Calendar />
            <SelectHour /> 
          </DateContext.Provider>
        </div>
        )}
    </div>
  );
}
