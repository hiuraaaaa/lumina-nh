'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { animeAPI } from '@/lib/api/endpoints'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimeDetail from '@/components/anime/AnimeDetail'
import VideoPlayer from '@/components/anime/VideoPlayer'
import Loading from '@/components/ui/Loading'
import type { AnimeDetail as AnimeDetailType } from '@/types'

export default function WatchPage() {
  const params = useParams()
  const [data, setData] = useState<AnimeDetailType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const url = decodeURIComponent(params.slug as string)
        const response = await animeAPI.getDetail(url)
        if (response.success && response.data) {
          setData(response.data)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [params.slug])

  return (
    <>
      <Navbar />
      <main className="container">
        {loading && <Loading />}
        {data && (
          <>
            <VideoPlayer streams={data.streams} />
            <AnimeDetail data={data} />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
