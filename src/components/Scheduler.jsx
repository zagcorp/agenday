import { useState, useContext } from "react";
import { Login } from "./Login.jsx";
import { SelectService } from "./SelectService.jsx";
import { Calendar } from "./Calendar.jsx";
import { SelectHour } from "./SelectHour.jsx";
import { Scheduling } from "./Scheduling.jsx";
import ServiceContext from './contexts/ServiceContext';
import EmployeeContext from './contexts/EmployeeContext';
import DateContext from './contexts/DateContext';
import HourContext from './contexts/HourContext';

export function Scheduler() {
  const [service, setService] = useState(useContext(ServiceContext).service);
  const [employee, setEmployee] = useState(useContext(EmployeeContext).employee);
  const [date, setDate] = useState(useContext(DateContext).date);
  const [hour, setHour] = useState(useContext(HourContext).hour);
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
      <ServiceContext.Provider value={{ service, setService }}>
        <EmployeeContext.Provider value={{ employee, setEmployee }}>
          {schedulerStep === 1 && (
            <div className="sm:flex h-full origin-right overflow-y-auto justify-between">
              <SelectService nextStep={nextStep} />
              <Login />
            </div>
          )}
          <DateContext.Provider value={{ date, setDate }}>
            <HourContext.Provider value={{ hour, setHour }}>
              {schedulerStep === 2 && (
                <div className="flex h-full w-full">
                  <button onClick={goBack} className="absolute text-base-100 p-6">{"<"}</button>
                    <Calendar />
                    <SelectHour nextStep={nextStep} />
                </div>
              )}
              {schedulerStep === 3 && (
                <div className="flex h-full w-full">
                  <Scheduling nextStep={nextStep} goBack={goBack} />
                </div>
              )}
              {schedulerStep === 4 && (
                <div className="flex h-full w-full">
                   <div className="bg-base-100 rounded-r-lg flex-1 bg-base-100 w-full y-full py-4">
                      <h1>VALEU</h1>
                    </div>
                </div>
              )}
            </HourContext.Provider>
          </DateContext.Provider>
        </EmployeeContext.Provider>
      </ServiceContext.Provider>
    </div>
  );
}
