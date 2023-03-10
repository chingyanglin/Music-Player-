import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
export default function Nav({toggle,setToggle}){
    return(
        <nav>
            <h1>WAVE</h1>
            <button onClick={()=>setToggle(!toggle)}>Library
            <FontAwesomeIcon
                icon={faMusic}
            />
            </button>
        </nav>
    )
}