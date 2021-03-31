import React from "react"

function Mylinia(props){
    console.log(props)
    return(
        <div className="linia-texto">
            <p>{props.text}</p>
        </div>
    )
}

export default Mylinia;