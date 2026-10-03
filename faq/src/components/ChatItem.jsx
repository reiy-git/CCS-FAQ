/**
 * Single chat-list row. Clicking opens the document modal.
 */
export default function ChatItem({ doc, onClick }) {
  return (
    <div className="chat-item" onClick={onClick} role="button" tabIndex={0}>
      {/* Avatar */}
      <div className="chat-avatar-wrap">
        <div className={`chat-avatar ${doc.iconBg}`}>
          <i className={`fa-solid ${doc.icon} ${doc.iconColor}`} />
        </div>
        {doc.online && <span className="online-dot" />}
      </div>

      {/* Text */}
      <div className="chat-text">
        <div className="chat-top-row">
          <h3 className="chat-title">{doc.title}</h3>
          <span className="chat-time">{doc.time}</span>
        </div>
        <p className="chat-subtitle">{doc.subtitle}</p>
      </div>

      {/* Unread badge */}
      {doc.unread > 0 && (
        <div className="badge">{doc.unread}</div>
      )}
    </div>
  )
}
