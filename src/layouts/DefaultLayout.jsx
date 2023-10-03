import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'

export function DefaultLayout() {
  return (
    <>
      {/* O Outlet é uma forma de representar todas as páginas que estão no Router do react-router-dom */}
      <Outlet />
      <Footer />
    </>
  )
}