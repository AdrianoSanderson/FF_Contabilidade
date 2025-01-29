import React from 'react'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Sobre from './components/Sobre'
import SliderServicos from './components/SliderServicos'

function App() {
  return (
    <div className='font-serif'>
      <Header/>
      <Inicio/>
      <Sobre/>
      <SliderServicos/>
    </div>
  )
}

export default App