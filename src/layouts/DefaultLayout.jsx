import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'

export function DefaultLayout() {
  return (
    // Esse fragmento pode ser transformado em uma <div> com classe pra criar padrão para o Header e as páginas
    <>
      {/* O Outlet é uma forma de representar todas as páginas que estão no Router do react-router-dom */}
      <Outlet />
      <Footer />
    </>
  )
}