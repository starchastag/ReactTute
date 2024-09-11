import React from 'react'
import Keys from './Keys';
import "../App.css"

const Keyboard = () => {
  const Keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const Keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const Keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className='keyboard'>
      <div className="line1">{Keys1.map((Key) => {
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

export default Keyboard