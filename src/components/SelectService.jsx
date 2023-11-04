import Card from "./Card.jsx";
import { Login } from "./Login.jsx";
import { Button } from "rsuite";

export function SelectService({updateSchedulerStep}) {
  return (
    <div className="flex flex-col justify-center items-center basis-8/12 w-full">
      <h2 className="title-font mb-4 text-base-100">SERVIÇO</h2>
        <div className="flex flex-wrap w-full gap-3 justify-center">
            <Card updateSchedulerStep={updateSchedulerStep} title="TÍTULO"></Card>
            <Card updateSchedulerStep={updateSchedulerStep} title="TÍTULO"></Card>
            <Card updateSchedulerStep={updateSchedulerStep} title="TÍTULO"></Card>
        </div>
    </div>
  );
}
