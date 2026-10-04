/**
 * Single chat-list row. Clicking opens the document modal.
 */
export default function ChatItem({ doc, onClick }) {
  return (
    <div className="chat-item" onClick={onClick} role="button" tabIndex={0}>
      {/* Avatar */}
      <div className="chat-avatar-wrap">
        {doc.image ? (
          <img src={doc.image} alt={doc.title} className="chat-avatar avatar-img" />
        ) : (
          <div className={`chat-avatar ${doc.iconBg}`}>
            <i className={`fa-solid ${doc.icon} ${doc.iconColor}`} />
          </div>
        )}
        {doc.online && <span className="online-dot" />}
      </div>

      {/* Text */}
      <div className="chat-text">
        <h3 className="chat-title" title={doc.title}>{doc.title}</h3>
        <p className="chat-subtitle" title={doc.subtitle}>{doc.subtitle}</p>
        <span className="chat-time">{doc.time}</span>
      </div>

      {/* Unread badge */}
      {doc.unread > 0 && (
        <div className="badge">{doc.unread}</div>
      )}
    </div>
  )
}
