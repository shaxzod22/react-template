import { useState } from 'react'

import './App.css'
import Burger from './components/burger/burger'
import Modal from './components/modal/modal'
import Render from './components/renderImage/render'

function App() {
 

  return (
    <>
  <Burger/>
  <Modal/>
  <Render/>
    </>
  )
}

export default App
