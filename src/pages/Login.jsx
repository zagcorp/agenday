import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function Login({ handleLogin }) {
  const [user, setUser] = useState("")
  const [psswd, setPsswd] = useState("")

  function onHandleLogin() {
    let [newUser, newPsswd] = [user, psswd]

    handleLogin(newUser, newPsswd)
  }

  function handleSetUser(event) {
    event.target.setCustomValidity('');
    setUser(event.target.value)
  }

  function handleSetPsswd(event) {
    event.target.setCustomValidity('');
    setPsswd(event.target.value)
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen top-0 left-0 bg-zinc-950 fixed z-10 bg-opacity-30 backdrop-blur-sm">
      <div className="bg-primary rounded-box shadow-xl p-8 flex flex-col items-center gap-5 text-base-100">
        <h2>Seja bem vindo!</h2>
        <label htmlFor="user">
          Usuário:
          <input className="input input-bordered w-full max-w-xs text-zinc-950 px-2.5" type="text" name="user" id="user" value={user} onChange={handleSetUser} />
        </label>
        <label htmlFor="password">
          Senha:
          <input className="input input-bordered w-full max-w-xs text-zinc-950" type="password" name="password" id="password" value={psswd} onChange={handleSetPsswd} />
        </label>
        <button className='btn btn-ghost text-base-100 active:text-accent w-full' type="submit" onClick={onHandleLogin}>Entrar</button>
      </div>
    </div>
  )
}