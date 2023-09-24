import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Component/Header'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Contact/>} path='/contact' />
        <Route element={<Menu/>} path='/menu'/>
      </Routes>

    </>
  )
}

export default App
