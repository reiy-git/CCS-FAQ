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
    </>
  )
}
