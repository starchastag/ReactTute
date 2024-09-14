// import { useState } from 'react'
import Board from './Components/Board'
import Keyboard from './Components/Keyboard'
import { createContext, useState } from 'react';
import { boardDefault } from './Components/Words';
import './App.css'

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 })

  const correctWord = "RIGHT"

  const onSelectLetter = (KeyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = KeyVal;
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })

  }

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })

  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })

  }

  return (
    <>
      <div id="main">
        <nav>
          <h2>Wordle Game</h2>
        </nav>
        <AppContext.Provider
          value={{
            board,
            setBoard,
            currAttempt,
            setCurrAttempt,
            onSelectLetter,
            onDelete, onEnter
          }}>

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
