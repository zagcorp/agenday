import Card from "./Card.jsx";
import { Login } from "./Login.jsx";
import { Button } from "rsuite";

export function SelectService({updateSchedulerStep}) {
  return (
    <div className="flex flex-col justify-center items-center basis-8/12 w-full py-14 px-14">
      <h2 className="title-font mb-4 text-base-100">SERVIÇO</h2>
      <div className="flex">
        <div className="flex w-full space-x-4 ">
            <Card updateSchedulerStep={updateSchedulerStep} title="TÍTULO"></Card>
            <Card updateSchedulerStep={updateSchedulerStep} title="TÍTULO"></Card>
            <Card updateSchedulerStep={updateSchedulerStep} title="TÍTULO"></Card>
        </div>
      </div>
    </div>
  );
}
