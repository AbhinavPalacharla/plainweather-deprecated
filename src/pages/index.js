import React from "react"

import Header from "../components/Header"
import BigWeather from "../components/BigWeather"
import WeeklyForecast from "../components/WeeklyForecast"

const Index = () => {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch("/.netlify/functions/getWeather")
      const data = await res.json()
      const item = data.weather
      // setData({ data })
      setData(item)
    }
    getData()
  }, [])

  return (
    <body className="bg-background font-apple font-normal">
      <div>
        {data && (
          <div>
            <Header location={data.location} date={data.date} />
            <BigWeather
              temperature={data.dailyTemperature}
              hour={data.hour}
              day={data.day}
              conditions={data.conditions}
            />
            <WeeklyForecast forecast={data.weeklyWeather} />
          </div>
        )}
      </div>
    </body>
  )
}

export default Index
