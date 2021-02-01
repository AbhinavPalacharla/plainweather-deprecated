import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/Header"
import BigWeather from "../components/BigWeather"
import WeeklyForecast from "../components/WeeklyForecast"

const Index = () => {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch("/.netlify/functions/getWeather")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div>
      <Header location={data.location} date={data.date} />
      <BigWeather
        temperature={data.dailyTemperature}
        hour={data.hour}
        day={data.day}
        conditions={data.conditions}
      />
      <WeeklyForecast forecast={data.weeklyWeather} />
      {/* <Header location="San Diego, CA" date="1.31.2021" />
      <BigWeather
        temperature="52"
        hour="12:00"
        day="Monday"
        conditions="Cloudy"
      /> */}
    </div>
  )
}

export default Index
