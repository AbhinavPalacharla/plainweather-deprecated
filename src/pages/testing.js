import React from "react"

const Index = () => {
  const [person, setPerson] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch("/.netlify/functions/getWeather")
      const data = await res.json()
      const item = data.weather
      setPerson(item)
    }
    getData()
    console.log(person)
  }, [])

  return <div>{person && <div>{person.location}</div>}</div>
}

export default Index
