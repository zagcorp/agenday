import YourSvg from "/src/assets/logo_fran.svg";

export function Navbar() {
  return (
    <div className="navbar sm:absolute top-0 left-0 w-full flex-none bg-base-100 px-20">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
        <label className="swap swap-flip text-9xl"> <input type="checkbox" />
          <div className="swap-on"><img src=".\src\assets\logo_agenday.png" alt="Your SVG" className="h-10 w-15 m-auto" /></div>
          <div className="swap-off"><img src=".\src\assets\logo_fran.png" alt="Your SVG" className="h-10 w-15 m-auto" /></div>
</label>
          
          
          
          
          </a>
      </div>

      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
