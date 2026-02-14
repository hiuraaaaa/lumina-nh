import Link from 'next/link'
import type { AnimeItem, AnimeSearchResult } from '@/types'

interface AnimeCardProps {
  item: AnimeItem | AnimeSearchResult;
  type?: 'latest' | 'search';
}

export default function AnimeCard({ item, type = 'latest' }: AnimeCardProps) {
  const title = type === 'search' ? (item as AnimeSearchResult).title : (item as AnimeItem).title
  const image = type === 'search' ? (item as AnimeSearchResult).img : (item as AnimeItem).image
  const link = type === 'search' ? (item as AnimeSearchResult).url : (item as AnimeItem).link
  
  return (
    <Link href={`/watch/${encodeURIComponent(link)}`} className="anime-card">
      <div className="card-image">
        <img 
          src={image} 
          alt={title}
          onError={(e) => {
            // Fallback jika gambar gagal load
            e.currentTarget.src = 'https://via.placeholder.com/200x280/667eea/ffffff?text=Anime'
          }}
        />
      </div>
      <div className="card-content">
        <h3 title={title}>{title}</h3>
      </div>
    </Link>
  )
}
