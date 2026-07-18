
import './App.css'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section >
        <button className='bg-purple-500 rounded-full ' onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          DECREMENT {count}
        </button>
      </section>

          
    </>
  )
}

export default App
