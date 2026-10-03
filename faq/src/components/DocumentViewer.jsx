import { useState, useEffect } from "react";
import "./DocumentViewer.css";

/**
 * Self-contained Document Viewer component.
 * Uses a fixed overlay to ensure full-screen coverage.
 */
export default function DocumentViewer({
  title,
  embedUrl,
  originalUrl,
  onClose,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Lock body scroll when open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="doc-viewer-overlay">
      <div className="doc-viewer-container">
        {/* Header */}
        <header className="doc-viewer-header">
          <button
            className="doc-viewer-nav-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="fa-solid fa-arrow-left" />
          </button>
          <h2 className="doc-viewer-title">{title}</h2>
          <button
            className="doc-viewer-nav-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </header>

        {/* Frame Area */}
        <div className="doc-viewer-frame">
          {isLoading && (
            <div className="doc-viewer-loader">
              <i className="fa-solid fa-spinner fa-spin" /> Loading...
            </div>
          )}
          {error ? (
            <div className="doc-viewer-error">
              <p>Failed to load. Please use the button below.</p>
            </div>
          ) : (
            <iframe
              src={embedUrl}
              className="doc-viewer-iframe"
              title={title}
              style={{
                width: "100dvw",
                
              }}
              
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setError(true);
                setIsLoading(false);
              }}
            />
          )}
        </div>

        {/* Footer Action Bar */}
        <footer className="doc-viewer-footer">
          <a
            href={originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="doc-viewer-action-btn"
          >
            <i className="fa-solid fa-arrow-up-right-from-square" />
            Open Original Document
          </a>
        </footer>
      </div>
    </div>
  );
}
