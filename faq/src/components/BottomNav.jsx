/**
 * Bottom navigation — Documents, People, About.
 * Uses NavLink for active state styling.
 */
import { NavLink } from 'react-router-dom'
import InquireButton from './InquireButton'

const tabs = [
  { to: '/', icon: 'fa-folder-open', label: 'Docs' },
  { to: '/people', icon: 'fa-users', label: 'People' },
  { to: '/locations', icon: 'fa-location-dot', label: 'Places' },
  { to: '/about', icon: 'fa-circle-info', label: 'About' },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav-container">
      <InquireButton />
      <div className="bottom-nav">
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
      </div>
    </nav>
  )
}
