import config from '@/config'

export default function Footer() {
  return (
    <footer className="footer">
      <p>{config.owner.copyright}</p>
      <div className="footer-links">
        {config.footer.links.map((link) => (
          <a key={link.href} href={link.href}>{link.name}</a>
        ))}
      </div>
    </footer>
  )
}
