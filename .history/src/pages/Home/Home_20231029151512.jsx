import { Scheduler } from "../../components/Scheduler.jsx";

export function Home() {
  return (
    <>
      <div className="container text-center px-5 m-auto">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">LOGO</a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
          </div>
        </div>
        
        <h1 className="title-font mb-4 text-accent">
          FAÇA SEU AGENDAMENTO
        </h1>
      </div>
      <Scheduler />
      <div className="p-4 bg-secondary rounded-xl my-16">
        <h2 className="text-center title-font mb-4 text-primary">
          ONDE NOS ENCONTRAR
        </h2>
        <iframe className="rounded-xl left-0" iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.1272300272763!2d-49.36793570858742!3d-28.68203385178282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521827f07e5ea21%3A0xd8659e91fa09dc04!2sR.%20Treze%20de%20Maio%2C%2067%20-%20Comerciario%2C%20Crici%C3%BAma%20-%20SC%2C%2088802-290!5e0!3m2!1spt-BR!2sbr!4v1696876522228!5m2!1spt-BR!2sbr" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}
