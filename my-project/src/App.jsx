import { useState } from 'react'
import { BrowserRouter, Routes, Route }  from "react-router-dom"

import Home from './pages/Home'
import LoginPg from './pages/LoginPg'
import SignUp from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/Login" element = {<LoginPg/>} />
        <Route path = "/SignUp" element = {<SignUp/>} />
      </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
