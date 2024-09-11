import React ,{useContext,useState} from 'react'
import "../App.css"
import { AppContext } from '../App'

const Keys = ({ KeyVal, bigKey }) => {

    const {board,setBoard} = useContext(AppContext);

    const selectLetter = () =>{
        const newBoard = [...board]
        newBoard[0][0] = KeyVal
        setBoard(newBoard)
    }
    return (
        <div className='Keys' id={bigKey && "big"} onClick={selectLetter}>
            {KeyVal}
        </div>
    )
}

export default Keys;