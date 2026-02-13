'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { animeAPI } from '@/lib/api/endpoints'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimeGrid from '@/components/anime/AnimeGrid'
import Pagination from '@/components/features/Pagination'
import type { AnimeItem } from '@/types'

export default function BrowsePage() {
  const params = useParams()
  const page = parseInt(params.page as string) || 1
  const [data, setData] = useState<AnimeItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const response = await animeAPI.getByPage(page)
        if (response.success && response.results) {
          setData(response.results)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [page])

  return (
    <>
      <Navbar />
      <main className="container">
        <h1 className="page-title">Browse - Page {page}</h1>
        {!loading && <AnimeGrid items={data} />}
        <Pagination currentPage={page} />
      </main>
      <Footer />
    </>
  )
}
