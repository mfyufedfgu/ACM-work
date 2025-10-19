import { useState } from 'react'

function TestRunner() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [items, setItems] = useState([])

  const addItem = () => {
    if (text.trim() === '') return
    setItems([...items, text.trim()])
    setText('')
  }

  const removeItem = (i) => setItems(items.filter((_, idx) => idx !== i))

  return (
    <div style={{ border: '1px solid #ddd', padding: 12, marginTop: 24, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
      <h2>Test Runner</h2>

      <div style={{ marginBottom: 12 }}>
        <strong>Counter:</strong> {count}
        <div style={{ marginTop: 8 }}>
          <button onClick={() => setCount(count + 1)} style={{ marginRight: 6 }}>+1</button>
          <button onClick={() => setCount(count - 1)} style={{ marginRight: 6 }}>-1</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <strong>Quick list (local state):</strong>
        <div style={{ marginTop: 8 }}>
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type item" />
          <button onClick={addItem} style={{ marginLeft: 6 }}>Add</button>
        </div>
        <ul style={{ textAlign: 'left' }}>
          {items.map((it, i) => (
            <li key={i}>
              {it}
              <button onClick={() => removeItem(i)} style={{ marginLeft: 8, color: 'red' }}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Mock fetch:</strong>
        <div style={{ marginTop: 8 }}>
          <MockFetchDemo />
        </div>
      </div>
    </div>
  )
}

function MockFetchDemo() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const doFetch = () => {
    setLoading(true)
    setError(null)
    setData(null)
    // Simulate async work
    setTimeout(() => {
      if (Math.random() < 0.2) {
        setError('Random failure')
      } else {
        setData({ time: new Date().toISOString(), value: Math.round(Math.random() * 100) })
      }
      setLoading(false)
    }, 700)
  }

  return (
    <div>
      <button onClick={doFetch} disabled={loading}>{loading ? 'Loading...' : 'Run mock fetch'}</button>
      {error && <div style={{ color: 'red', marginTop: 8 }}>Error: {error}</div>}
      {data && (
        <pre style={{ textAlign: 'left', background: '#f7f7f7', padding: 8, marginTop: 8 }}>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  )
}

export default TestRunner
