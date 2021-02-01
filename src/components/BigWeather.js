import React from "react"

const BigWeather = props => {
  return (
    <div>
      <h1>{props.temperature}</h1>
      <ul>
        <li>{props.hour}</li>
        <li>{props.day}</li>
        <li>{props.conditions}</li>
      </ul>
    </div>
  )
}

export default BigWeather
