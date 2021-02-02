const axios = require("axios")

exports.handler = async (event, context) => {
  let weekly = [
    {
      day: "Sunday",
      abbrev_day: "Sun",
      tempHigh: 0,
      tempLow: 0,
    },
    {
      day: "Monday",
      abbrev_day: "Mon",
      tempHigh: 0,
      tempLow: 0,
    },
    {
      day: "Tuesday",
      abbrev_day: "Tue",
      tempHigh: 0,
      tempLow: 0,
    },
    {
      day: "Wednesday",
      abbrev_day: "Wed",
      tempHigh: 0,
      tempLow: 0,
    },
    {
      day: "Thursday",
      abbrev_day: "Thu",
      tempHigh: 0,
      tempLow: 0,
    },
    {
      day: "Friday",
      abbrev_day: "Fri",
      tempHigh: 0,
      tempLow: 0,
    },
    {
      day: "Saturday",
      abbrev_day: "Sat",
      tempHigh: 0,
      tempLow: 0,
    },
  ]

  let data = await axios
    .get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=32.992828&lon=-117.102524&exclude={part}&appid=c9109031a34da0c02b1c5a78303fb3d3&units=imperial"
    )
    .then(res => {
      return res.data
    })

  let weather = data

  // for (let i = 0; i < weekly.length; i++) {
  //   let day = new Date(weather.daily[i].dt * 1000).getDay() - 1
  //   //weekly[i].temp = date.getDay();
  //   weekly[i].tempHigh = Math.round(weather.daily[i].temp.max)
  //   weekly[i].tempLow = Math.round(weather.daily[i].temp.min)
  // }
  let day = new Date().getDay()

  // for (let i = 0; i < weather.daily.length && weekly[day].tempHigh === 0; i++) {
  //   if (day === 6) {
  //     day = 0
  //   }
  //   weekly[day].tempHigh = weather.daily[i].temp.max
  //   weekly[day].tempLow = weather.daily[i].temp.min
  //   day++
  // }
  let j = 0

  for (let i = 0; i < weekly.length; i++) {
    let maxTemp = Math.round(weather.daily[j].temp.max)
    let minTemp = Math.round(weather.daily[j].temp.min)
    weekly[day].tempHigh = maxTemp
    weekly[day].tempLow = minTemp
    day++
    if (day === 7) {
      day = 0
    }
    j++
  }

  let unix = await axios
    .get("https://worldtimeapi.org/api/timezone/America/Los_Angeles")
    .then(res => {
      return res.data.unixtime
    })

  return {
    statusCode: 200,
    body: JSON.stringify({
      weather: {
        location: "San Diego, CA",
        date: `${
          new Date(unix * 1000).getMonth() +
          1 +
          "." +
          new Date(unix * 1000).getDate() +
          "." +
          new Date(unix * 1000).getFullYear()
        }`,
        dailyTemperature: `${Math.round(weather.current.temp)}°`,
        hour: `${new Date(unix * 1000).getHours() - 8}:00`,
        day: weekly[new Date().getDay()].day,
        conditions: weather.current.weather[0].description,
        weeklyWeather: weekly,
      },
    }),
  }

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ test: "this is just a test" }),
  // }
}
