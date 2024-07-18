// src/app/components/Counter.tsx
'use client'

import { useState, useEffect } from 'react'

// Define the shape of the data we expect from our API
interface CountResponse {
    count: number;
}

export default function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetchCount()
    }, [])

    const fetchCount = async () => {
        try {
            const response = await fetch('/api/getCount')
            const data = await response.json()

            // Type guard to ensure data has the correct shape
            if (isCountResponse(data)) {
                setCount(data.count)
            } else {
                console.error('Unexpected data format from API')
            }
        } catch (error) {
            console.error('Error fetching count:', error)
        }
    }

    const incrementCount = async () => {
        try {
            const response = await fetch('/api/incrementCount', { method: 'POST' })
            const data = await response.json()

            // Type guard to ensure data has the correct shape
            if (isCountResponse(data)) {
                setCount(data.count)
            } else {
                console.error('Unexpected data format from API')
            }
        } catch (error) {
            console.error('Error incrementing count:', error)
        }
    }

    // Type guard function
    function isCountResponse(data: any): data is CountResponse {
        return typeof data === 'object' && data !== null && typeof data.count === 'number';
    }

    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={incrementCount}>Count Up</button>
            <style jsx>{`
        button {
          font-size: 18px;
          padding: 10px 20px;
        }
      `}</style>
        </div>
    )
}