import { useState } from 'react'

const gifts = ['Mech keyboard', 'CPU i9', 'Ram 32GB', 'RTX 4090']

function App() {
    return (
        <div style={{ padding: 32 }}>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button>Lấy thưởng</button>
        </div>
    )
}

export default App
