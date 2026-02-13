'use client'
import { useEffect, useState } from 'react'
import { animeAPI } from '@/lib/api/endpoints'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimeGrid from '@/components/anime/AnimeGrid'
import Loading from '@/components/ui/Loading'
import type { AnimeItem } from '@/types'

export default function Home() {
  const [data, setData] = useState<AnimeItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await animeAPI.getLatest()
        if (response.success && response.results) {
          setData(response.results)
        }
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <main className="container">
        <h1 className="page-title">Latest Anime</h1>
        {loading && <Loading />}
        {error && <div className="error">{error}</div>}
        {!loading && !error && <AnimeGrid items={data} />}
      </main>
      <Footer />
    </>
  )
}
