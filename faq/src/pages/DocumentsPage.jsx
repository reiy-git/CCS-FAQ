/**
 * Documents page — stories row + chat list.
 * This is the main "Chats" view, repurposed for documents.
 */
import { useState } from 'react'
import StoriesRow from '../components/StoriesRow'
import ChatItem from '../components/ChatItem'
import DocumentViewer from '../components/DocumentViewer'
import { documents } from '../data/documents'

export default function DocumentsPage() {
  const [activeDoc, setActiveDoc] = useState(null)

  return (
    <>
      <StoriesRow />
      <section className="chat-list">
        {documents.map((doc) => (
          <ChatItem key={doc.id} doc={doc} onClick={() => setActiveDoc(doc)} />
        ))}
      </section>
      {activeDoc && (
        <DocumentViewer 
          title={activeDoc.title}
          embedUrl={activeDoc.url}
          originalUrl={activeDoc.urleditable}
          onClose={() => setActiveDoc(null)} 
        />
      )}
      <div style={{ margin: '24px 16px', padding: '16px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', color: 'var(--grey)', fontSize: '12px', lineHeight: '1.5' }}>
        <p><strong>Disclaimer:</strong> This information is subject to change. For further assistance, please ask the CCS Secretary in the CCS office directly.</p>
      </div>
    </>
  )
}
