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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1863902240066!2d-49.32104752367466!3d-28.594184665551865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521770f5f9148a7%3A0x19a8a835f344de39!2sR.%20Formosa%2C%20383%20-%20Horizonte%2C%20Cocal%20do%20Sul%20-%20SC%2C%2088845-000!5e0!3m2!1spt-BR!2sbr!4v1700000296272!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
