import { NextResponse } from 'next/server'
import { animeAPI } from '@/lib/api/endpoints'

export async function GET() {
  try {
    const data = await animeAPI.getLatest()
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
