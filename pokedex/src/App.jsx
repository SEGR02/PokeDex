import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import InputName from './components/InputName'
import {HashRouter, Route, Routes} from 'react-router-dom'
import PokeDex from './components/PokeDex'
import ProtectedRoutes from './components/ProtectedRoutes'
import PokeData from './components/PokeData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<InputName/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<PokeDex/>}/>
            <Route path='/pokedex/:id' element={<PokeData/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
