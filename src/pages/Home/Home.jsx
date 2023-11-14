import { Scheduler } from "../../components/Scheduler.jsx";

export function Home() {
  return (
    <main className="flex flex-col gap-10">
      <h1 className="title-font text-white text-center text-accent">FAÇA SEU AGENDAMENTO</h1>

      <Scheduler />

      <div className="p-4 bg-neutral sm:rounded-xl shadow-md">
        <h2 className="text-center title-font text-secondary">
          ONDE NOS ENCONTRAR
        </h2>

        <iframe
          className="sm:rounded-xl left-0 p-4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.1272300272763!2d-49.36793570858742!3d-28.68203385178282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521827f07e5ea21%3A0xd8659e91fa09dc04!2sR.%20Treze%20de%20Maio%2C%2067%20-%20Comerciario%2C%20Crici%C3%BAma%20-%20SC%2C%2088802-290!5e0!3m2!1spt-BR!2sbr!4v1696876522228!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
