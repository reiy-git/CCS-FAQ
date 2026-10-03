/**
 * Top header bar — logo, optional right-side actions.
 */
import Logo from './Logo'

export default function Header({ logoSrc }) {
  return (
    <header className="header">
      <Logo src={logoSrc} />
    </header>
  )
}
