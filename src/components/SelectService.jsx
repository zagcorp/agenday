import Card from "./Card.jsx";
import { Login } from "./Login.jsx";
import { Button } from "rsuite";

export function SelectService({updateSchedulerStep}) {
  return (
    <div className="flex flex-col xl:py-20 lg:p-14 md:p-10 p-6 w-full overflow-y-auto">
      <h2 className="title-font mb-4 text-base-100">SERVIÇO</h2>
        <div className="flex flex-wrap w-full justify-center md:items-center gap-3">
            <Card updateSchedulerStep={updateSchedulerStep} title="TÍTULO"></Card>
            <Card updateSchedulerStep={updateSchedulerStep} title="TÍTULO"></Card>
            <Card updateSchedulerStep={updateSchedulerStep} title="TÍTULO"></Card>
        </div>
    </div>
  );
}
