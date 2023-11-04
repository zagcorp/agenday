export function Login() {
  return (
    <div className="container px-14 xl:py-20 md:py-16 basis-4/12 rounded-r-xl text-center bg-base-100">
      <h2 className="mb-4 ">LOGIN</h2>
      <div className="min-h-[170px] flex flex-col justify-center gap-6">
        <input
          type="text"
          placeholder="Login"
          className="input input-bordered input-secondary"
        />
        <input
          type="password"
          placeholder="Senha"
          className="input input-bordered input-secondary"
        />
      </div>
    </div>
  );
}
