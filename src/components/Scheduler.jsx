import { useState, useContext } from "react";
import { Login } from "./Login.jsx";
import { SelectService } from "./SelectService.jsx";
import { Calendar } from "./Calendar.jsx";
import { SelectHour } from "./SelectHour.jsx";
import DateContext from './contexts/DateContext';

export function Scheduler() {
  const [date, setDate] = useState(useContext(DateContext).date);
  const [schedulerStep, setSchedulerStep] = useState(1);

  function nextStep() {
    const newStep = schedulerStep + 1
    setSchedulerStep(newStep);
  }

  function goBack() {
    const newStep = schedulerStep - 1
    setSchedulerStep(newStep);
  }

  return (
    <div className="relative w-full sm:h-[60vh] mx-auto text-center sm:rounded-2xl shadow-md">
      {schedulerStep === 1 && (
        <div className="sm:flex h-full origin-right overflow-y-auto justify-between">
          <SelectService nextStep={nextStep} />
          <Login />
        </div>
      )}
      {schedulerStep === 2 && (
        <div className="flex h-full w-full">
          <button onClick={goBack} className="absolute text-base-100 p-6">{"<"}</button>
          <DateContext.Provider value={{ date, setDate }}>
            <Calendar />
            <SelectHour />
          </DateContext.Provider>
        </div>
      )}
    </div>
  );
}
