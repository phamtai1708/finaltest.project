import React from "react";
import './Info.css'

const Info = (props)=>{

    return(
        <>
        <div className="info">
                <h4>{props.above}</h4>
                <p>{props.below}</p>
        </div>
        </>
    )
}

export default Info