/**
 * Root layout — Header + routed page + BottomNav.
 * Pass a logo image via logoSrc if you have one.
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import DocumentsPage from './pages/DocumentsPage'
import AboutPage from './pages/AboutPage'
import PeoplePage from './pages/PeoplePage'
import LocationsPage from './pages/LocationsPage'
import './App.css'

const logoSrc = '';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header logoSrc={logoSrc} />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<DocumentsPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}
