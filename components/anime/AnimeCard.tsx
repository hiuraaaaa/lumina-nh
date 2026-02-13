import Link from 'next/link'
import type { AnimeItem, AnimeSearchResult } from '@/types'

export default function AnimeCard({ item, type = 'latest' }: any) {
  const title = type === 'search' ? item.title : item.title
  const image = type === 'search' ? item.img : item.image
  const link = type === 'search' ? item.url : item.link
  
  return (
    <Link href={`/watch/${encodeURIComponent(link)}`} className="anime-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </Link>
  )
}
