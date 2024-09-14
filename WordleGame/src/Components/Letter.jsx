import React,{useContext} from 'react'
import { AppContext } from '../App'

const Letter = ({letterPos,attempVal}) => {
    const {board} = useContext(AppContext);
    const letter = board[attempVal][letterPos];

  return (
    <div className='letter' id=''>{letter}</div>
  )
}

export default Letter