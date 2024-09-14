import React, { useContext,useCallback, useEffect } from 'react'
import Keys from './Keys';
import { AppContext } from '../App';
import "../App.css"

const Keyboard = () => {
  const {onEnter,onDelete,onselectLetter,} = useContext(AppContext);
  const Keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const Keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const Keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      Keys1.forEach((key) => {
        if (event.key === key) {
          onselectLetter(key)
        }
      })
      Keys2.forEach((key) => {
        if (event.key === key) {
          onselectLetter(key)
        }
      })
      Keys3.forEach((key) => {
        if (event.key === key) {
          onselectLetter(key)
        }
      })
    }

  })


  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);


    return () => {
      document.addEventListener("keydown", handleKeyboard);
    };

  }, [handleKeyboard])

  return (
    <div className='keyboard' onKeyDown={handleKeyboard} >
      <div className="line1">
        {Keys1.map((Key) => {
          return <Keys KeyVal={Key} />
        })}</div>
      <div className="line2">
        {Keys2.map((Key) => {
          return <Keys KeyVal={Key} />
        })}</div>
      <div className="line3">
        <Keys KeyVal={"Enter"} bigKey />
        {Keys3.map((Key) => {
          return <Keys KeyVal={Key} />
        })}
        <Keys KeyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;