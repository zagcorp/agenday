import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      {/* O Outlet é uma forma de representar todas as páginas que estão no Router do react-router-dom */}
      <Outlet />
    </>
  )
}