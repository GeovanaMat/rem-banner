import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import MenuLateral from './components/MenuLateral'
import DailySummary from './components/DailySummary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="w-screen h-screen flex flex-col items-center overflow-hidden relative">
    <img
      src="/remtop.webp"
      className="absolute max-h-full max-w-full object-contain mt-[5%] z-0 animate-slide-up"
      alt="Rem foto"
    />
    <Menu/>
    <MenuLateral/>
    <DailySummary/>
     
    </div>
</>
  )
}

export default App
