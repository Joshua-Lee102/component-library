import React from "react"

export default function Badge({children , color, shape}) {
    return (
        <button className={`${color} ${shape}`}> Badge </button>
    )
    
}