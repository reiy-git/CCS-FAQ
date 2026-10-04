import { inquireFormUrl } from '../data/documents'

export default function InquireButton() {
  return (
    <a href={inquireFormUrl} target="_blank" rel="noopener noreferrer" className="inquire-nav-btn">
        <i className="fa-solid fa-envelope" />
        <span>Inquire</span>
    </a>
  )
}
