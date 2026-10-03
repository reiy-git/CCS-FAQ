/**
 * Full-screen modal overlay for viewing a document.
 * Shows an iframe if doc.url is set, otherwise a placeholder.
 */
export default function DocModal({ doc, onClose }) {
  if (!doc) return null;

  return (
    <div className="modal-overlay visible">
      {/* Header */}
      <div className="modal-header">
        <div className="modal-header-left">
          <button className="icon-btn" onClick={onClose} aria-label="Back">
            <i className="fa-solid fa-arrow-left" />
          </button>
          <div>
            <h2 className="modal-title">{doc.title}</h2>
            <p className="modal-sub">Viewing document</p>
            <h4>File Link: <a style={{  color: '#0070f3', textDecoration: 'underline', fontStyle: 'italic', fontWeight: 'bold' }} href={doc.urleditable}>{doc.urleditable}</a></h4>
          </div>
        </div>
        <button className="icon-btn" onClick={onClose} aria-label="Close">
          <i className="fa-solid fa-xmark" />
        </button>
       
      </div>

      {/* Body */}
      <div className="modal-body">
        {doc.url ? (
            <iframe src={doc.url} className="modal-iframe" title={doc.title} />
        ) : (
          <div className="modal-placeholder">
            <div className={`modal-icon ${doc.iconBg}`}>
              <i className={`fa-solid ${doc.icon} ${doc.iconColor}`} />
            </div>
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>
            <div className="modal-hint">
              <i className="fa-solid fa-circle-info" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
