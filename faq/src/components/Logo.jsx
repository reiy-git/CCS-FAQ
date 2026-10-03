/**
 * Logo — drop any image into src/assets and import it here,
 * or pass a src prop. Falls back to text.
 */
export default function Logo({ src, alt = 'Facts and Queries', size = 32 }) {
  if (src) {
    return <img src={src} alt={alt} style={{ height: size }} className="logo-img" />
  }
  // Text fallback when no image provided
  return <span className="logo-text">{alt}</span>
}
