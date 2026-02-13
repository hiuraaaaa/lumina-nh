import { NextResponse } from 'next/server'
import { animeAPI } from '@/lib/api/endpoints'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const url = searchParams.get('url') || ''
    const data = await animeAPI.getDetail(url)
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
