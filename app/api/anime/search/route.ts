import { NextResponse } from 'next/server'
import { animeAPI } from '@/lib/api/endpoints'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || ''
    const data = await animeAPI.search(query)
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
