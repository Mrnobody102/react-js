import { useState } from 'react'
import './Input.scss'

const Counter: React.FC = () => {
  const [count, setCount] = useState(1)
  function incrementCount() {
    if (count >= 100) return
    setCount(count + 1)
  }
  function decrementCount() {
    if (count <= 0) return
    setCount(count - 1)
  }
  return (
    <div className='counter-container'>
      <div className='counter-minus' onClick={decrementCount}>
        -
      </div>
      <div className='counter'>{count}</div>
      <div className='counter-plus' onClick={incrementCount}>
        +
      </div>
    </div>
  )
}

export default Counter
