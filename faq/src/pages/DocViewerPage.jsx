/**
 * Generic page for displaying a Google Doc/Sheet directly.
 */
export default function DocViewerPage({ docConfig, title }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '16px', boxSizing: 'border-box' }}>
      {/* Action Header */}
      <div style={{ marginBottom: '16px' }}>
          <a href={docConfig.urleditable} target="_blank" rel="noopener noreferrer" style={{background: 'var(--tiger)', color: 'var(--carbon)', padding: '12px', textAlign: 'center', borderRadius: '10px', fontWeight: '600', display: 'block'}}>
             View Official Document
          </a>
      </div>

      {/* Embedded Document View */}
      <div style={{ flex: 1, position: 'relative', minHeight: '400px' }}>
          <iframe
              src={docConfig.url}
              title={title}
              style={{
                width: "100%",
                height: "100%",
                border: "0",
                display: 'block'
              }}
            />
      </div>

      {/* Disclaimer */}
      <div style={{ marginTop: '16px', padding: '16px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', color: 'var(--grey)', fontSize: '12px', lineHeight: '1.5', flexShrink: 0 }}>
        <p><strong>Disclaimer:</strong> This information is subject to change. For further assistance, please ask the CCS Secretary in the CCS office directly.</p>
      </div>
    </div>
  )
}
