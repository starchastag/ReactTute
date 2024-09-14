import React, { useContext, useState } from 'react'
import "../App.css"
import { AppContext } from '../App'

const Keys = ({ KeyVal, bigKey }) => {

    const { onDelete,onSelectLetter,onEnter } = useContext(AppContext);

    const selectLetter = () => {
        if (KeyVal === "ENTER") {
            onEnter();
        } else if (KeyVal=== "DELETE") {
            onDelete()
        }
        else {
            onSelectLetter(KeyVal);
        }
    };
    return (
        <div className='Keys' id={bigKey && "big"} onClick={selectLetter}>
            {KeyVal}
        </div>
    )
}

export default Keys;