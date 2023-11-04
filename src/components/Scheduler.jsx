import { Login } from "./Login.jsx";
import { SelectService } from "./SelectService.jsx";
import { CalendarioComponente } from "./CalendarioComponente.jsx";
import { useState } from "react";

export function Scheduler() {
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
        {schedulerStep === 2 && <CalendarioComponente />}
      </div>
    </div>
  );
}
