import React from "react"

const WeeklyForecast = props => {
  let elements = []

  for (let i = 0; i < props.forecast.length; i++) {
    elements.push(
      <li key={props.forecast[i].day}>
        <div className="flex flex-col content-center px-8">
          <h1 className="font-light">{props.forecast[i].abbrev_day}</h1>
          <p className="font-semibold pt-1">
            {props.forecast[i].tempHigh + "°"}
          </p>
          <p className="font-semibold pt-1">
            {props.forecast[i].tempLow + "°"}
          </p>
        </div>
      </li>
    )
  }

  return (
    <div className="text-blackText pt-24 pb-6 container-lg mx-auto">
      <ul className="flex flex-row">{elements}</ul>
    </div>
  )
}

export default WeeklyForecast
