import { Outlet } from 'react-router'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

function Layout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
