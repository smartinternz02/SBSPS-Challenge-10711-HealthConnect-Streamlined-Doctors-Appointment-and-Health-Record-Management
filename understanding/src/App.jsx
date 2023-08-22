import { useState } from 'react'

import './App.css'
import AssessmentCarousel from './pages/Assessment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>its understanding bro !!!</h1>
        <AssessmentCarousel/>
      </div>
    </>
  )
}

export default App
