import { Scheduler } from "../../components/Scheduler.jsx";

export function Home() {
  return (
    <>
      <div className="container text-center px-5 py-24 m-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          LOGO
        </h1>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          FAÇA SEU AGENDAMENTO
        </h1>
      </div>
      <Scheduler />
      <h1 className="sm:text-3xl text-center text-2xl font-medium title-font mb-4 text-gray-900">
        ONDE NOS ENCONTRAR
      </h1>
    </>
  );
}
