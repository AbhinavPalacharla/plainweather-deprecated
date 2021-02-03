import React from "react"

const BigWeather = props => {
  return (
    <div className="text-blackText font-apple flex flex-row p-48 justify-center">
      <div>
        <h1 className="font-bold text-hero">{props.temperature}</h1>
      </div>
      <div className="pt-16 pl-24">
        <ul>
          <li className="font-light text-base">{props.hour}</li>
          <li className="font-bold text-lg">{props.day}</li>
          <li className="font-light text-base">{props.conditions}</li>
        </ul>
      </div>
    </div>
  )
}

export default BigWeather
