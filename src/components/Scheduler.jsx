import { Login } from "./Login.jsx";
import { SelectService } from "./SelectService.jsx";

export function Scheduler() {
  return (
    <div className="flex min-h-[25rem] m-auto flex-nowrap max-w-6xl text-center bg-neutral rounded-2xl">
      <SelectService />
      <Login />
    </div>
  );
}
