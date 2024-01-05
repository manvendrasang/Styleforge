import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Vision from './components/Vision'

function App() {
    return (
      <div>
        <Sidenav />
        <Main />
        <Vision />
       </div>
    )
  }
  
  export default App