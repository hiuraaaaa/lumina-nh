import Link from 'next/link'
import config from '@/config'
import SearchBar from '@/components/features/SearchBar'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">{config.site.logo} {config.site.name}</Link>
      <SearchBar />
    </nav>
  )
}
