import React from "react"

export default function Card({children, icon = <Icon.Default />, iconBackgroundColor}) {
    return (
        <div className="card-content">
         <div className={`card-iconPlaceholder ${iconBackgroundColor}`}>
            {icon}
           </div>
           {children}
        </div>
    )
}