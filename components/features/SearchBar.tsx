'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  
  const handleSearch = (e: any) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }
  
  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search anime..."
      />
      <button type="submit">Search</button>
    </form>
  )
}
