'use client'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { animeAPI } from '@/lib/api/endpoints'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimeGrid from '@/components/anime/AnimeGrid'
import Loading from '@/components/ui/Loading'
import type { AnimeSearchResult } from '@/types'

// Separate component for search content
function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [data, setData] = useState<AnimeSearchResult[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query) return
    
    async function fetchData() {
      setLoading(true)
      try {
        const response = await animeAPI.search(query)
        if (response.data) {
          setData(response.data)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [query])

  return (
    <>
      <h1 className="page-title">Search: {query}</h1>
      {loading && <Loading />}
      <AnimeGrid items={data} type="search" />
    </>
  )
}

// Main page component with Suspense
export default function SearchPage() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Suspense fallback={<Loading />}>
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
