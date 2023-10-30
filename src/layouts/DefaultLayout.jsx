import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export function DefaultLayout() {
  return (
    <>
      {/* O Outlet é uma forma de representar todas as páginas que estão no Router do react-router-dom */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}