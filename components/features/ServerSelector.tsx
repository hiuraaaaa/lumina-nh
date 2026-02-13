import type { StreamServer } from '@/types'

export default function ServerSelector({ servers, current, onChange }: any) {
  return (
    <div className="server-selector">
      {servers.map((server: StreamServer, i: number) => (
        <button
          key={i}
          className={current === i ? 'active' : ''}
          onClick={() => onChange(i)}
        >
          {server.name}
        </button>
      ))}
    </div>
  )
}
