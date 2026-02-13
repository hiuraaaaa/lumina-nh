import AnimeCard from './AnimeCard'

export default function AnimeGrid({ items, type = 'latest' }: any) {
  return (
    <div className="anime-grid">
      {items.map((item: any, i: number) => (
        <AnimeCard key={i} item={item} type={type} />
      ))}
    </div>
  )
}
