export default function GenreFilter({ genres, selected, onChange }: any) {
  return (
    <div className="genre-filter">
      {genres.map((genre: string) => (
        <button 
          key={genre}
          className={selected === genre ? 'active' : ''}
          onClick={() => onChange(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  )
}
