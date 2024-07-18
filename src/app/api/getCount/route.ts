import { NextResponse } from 'next/server'

export async function GET() {
    const count = await COUNTER.get('count') || '0'
    return NextResponse.json({ count: parseInt(count) } as { count: number })
}