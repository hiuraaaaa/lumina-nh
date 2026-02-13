import type { AnimeDetail } from '@/types'

export default function AnimeDetail({ data }: { data: AnimeDetail }) {
  return (
    <div className="anime-detail">
      <h1>{data.title}</h1>
      <img src={data.img} alt={data.title} />
      <p>{data.sinopsis}</p>
      <div className="info">
        <span>Producer: {data.producers}</span>
        <span>Duration: {data.duration}</span>
      </div>
      <div className="downloads">
        {data.download.map((q, i) => (
          <div key={i}>
            <h3>{q.type}</h3>
            {q.links.map((link, j) => (
              <a key={j} href={link.link} target="_blank">{link.name}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
