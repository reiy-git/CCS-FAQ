/**
 * About page — brief info section replacing Alerts + Menu.
 */
export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-icon">
        <i className="fa-solid fa-graduation-cap" />
      </div>
      <h2>Facts and Queries</h2>
      <p className="about-desc">
        A quick-access document portal for students of the
        University of Cabuyao — College of Computing Studies.
      </p>

      <div className="about-card">
        <p>This is made entirely to help students navigate forms they need and also to help the college secretary with the student's queries</p>
      </div>

      <div className="about-card">
        <h3>Quick Links</h3>
        <a href="https://www.facebook.com/ucpncofficial" target="_blank" rel="noopener noreferrer" className="about-link">
          <i className="fa-brands fa-facebook" /> UC Facebook Page
        </a>
      </div>

      <p className="about-footer">
        Built by Reiy Briones &middot; {new Date().getFullYear()}
      </p>
    </section>
  )
}
