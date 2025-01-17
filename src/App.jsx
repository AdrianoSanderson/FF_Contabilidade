import React from 'react'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Sobre from './components/Sobre'

function App() {
  return (
    <div className='font-serif'>
      <Header/>
      <Inicio/>
      <Sobre/>
    </div>
  )
}

export default App