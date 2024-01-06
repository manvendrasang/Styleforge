import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Vision from './components/Vision'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Vision />
      <Projects />
      <Contact />
     </div>
  )
}

export default App
