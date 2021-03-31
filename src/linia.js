import React from "react"

function Mylinia(props){
    console.log(props)
    return(
        <div className="linia-texto">
            <p>{props.name}</p>
        </div>
    )
}

export default Mylinia;