/**
 * Bottom navigation — Documents, People, About.
 * Uses NavLink for active state styling.
 */
import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', icon: 'fa-folder-open', label: 'Documents' },
  { to: '/about', icon: 'fa-circle-info', label: 'About' },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          end={t.to === '/'}
          className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
        >
          <i className={`fa-solid ${t.icon}`} />
          <span>{t.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
