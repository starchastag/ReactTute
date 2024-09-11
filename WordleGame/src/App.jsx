// import { useState } from 'react'
import Board from './Components/Board'
import Keyboard from './Components/Keyboard'
import { createContext, useState } from 'react';
import { boardDefault } from './Components/Words';
import './App.css'

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);

  return (
    <>
      <div className="main">
        <nav>
          <h2>Wordle Game</h2>
        </nav>
        <AppContext.Provider value={{ board, setBoard }}>

          <div className='game'>
            <Board />
            <Keyboard />
          </div>
        </AppContext.Provider>

      </div>
    </>
  )
}

export default App
