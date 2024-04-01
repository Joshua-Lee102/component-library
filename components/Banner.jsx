import React from "react"
import Icon from "./Icon"

export default function Banner({ type, title, message }) {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }
  
  const iconMap = {
    success: <Icon.FaCheckCircle/>,
    warning:  <Icon.FaExclamationTriangle />,
    error: <Icon.FaRegTimesCircle />,
    neutral: <Icon.FaInfoCircle />
  }

  return (
    <div className={`alert alert-${type}`} onClick={handleClick}>
      <span className="icon">{iconMap[type]}</span>
      <div className="content">
        <strong>{title}</strong>
        {isExpanded ? <p>{message}</p> : ''}
      </div>
    </div>
  )
}
