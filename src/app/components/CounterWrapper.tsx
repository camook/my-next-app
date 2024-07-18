'use client'

import Counter from './Counter'

export default function CounterWrapper() {
    return (
        <div>
            <Counter />
            <style jsx global>{`
                .container {
                    text-align: center;
                    padding: 20px;
                }
            `}</style>
        </div>
    )
}