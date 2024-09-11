import './App.css'
import React, { useState , useContext} from 'react';
import Mainmenu from './Component/Mainmenu';
import Quiz from './Component/Quiz';
import EndScreen from './Component/EndScreen';
import { QuizContext } from './Helper/Context';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score,setScore] = useState(0);
  const [desc,setDesc] = useState("");

  return (

    <>
      <div className="App">
        <h1>Quiz App</h1>
        

        <QuizContext.Provider value={{gameState, setGameState,score,setScore,desc,setDesc}}>
          {gameState === "menu" && <Mainmenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "endScreen" && <EndScreen />}
        </QuizContext.Provider>

      </div>

    </>
  )
}

export default App;
