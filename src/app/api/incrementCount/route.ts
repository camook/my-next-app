import { NextResponse } from 'next/server'

export async function POST() {
    let count = await COUNTER.get('count') || '0'
    count = (parseInt(count) + 1).toString()
    await COUNTER.put('count', count)
    return NextResponse.json({ count: parseInt(count) } as { count: number })
}