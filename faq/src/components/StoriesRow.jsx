/**
 * Horizontally scrolling stories row.
 * First slot = "Inquire" (links to Google Form).
 * Remaining slots = external links from stories data.
 */
import { stories, inquireFormUrl } from '../data/documents'

export default function StoriesRow() {
  return (
    <section className="stories-row">
      {/* Inquire — opens Google Form */}
      

      {stories.map((s) => (
        <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="story-item">
          <div className="story-ring">
            <div className="story-ring-inner">
              <div className="story-avatar">
                <img className="story-logo" src={s.image} alt={`${s.label} logo`} />
              </div>
            </div>
          </div>
          <span className="story-label">{s.label}</span>
        </a>
      ))}

      <a href={inquireFormUrl} target="_blank" rel="noopener noreferrer" className="story-item">
        <div className="story-avatar add-new">
          <i className="fa-solid fa-envelope" />
        </div>
        <span className="story-label">Inquire</span>
      </a>
    </section>
  )
}
