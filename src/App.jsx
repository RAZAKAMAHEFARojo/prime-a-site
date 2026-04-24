import { Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CaseStudiesPage from './pages/CaseStudiesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import DigitalSolutionsPage from './pages/DigitalSolutionsPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions-digitales" element={<DigitalSolutionsPage />} />
        <Route path="/realisations" element={<CaseStudiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
