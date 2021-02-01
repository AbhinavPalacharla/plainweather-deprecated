import React from "react"

const WeeklyForecast = props => {
  let elements = []

  for (let i = 0; i < props.forecast.length; i++) {
    elements.push(
      <li key={props.forecast[i].day}>
        <p>{props.forecast[i].day}</p>
        <h1>{props.forecast[i].tempHigh + "°"}</h1>
        <h1>{props.forecast[i].tempLow + "°"}</h1>
      </li>
    )
  }

  return (
    <div>
      <ul>{elements}</ul>
    </div>
  )
}

export default WeeklyForecast
