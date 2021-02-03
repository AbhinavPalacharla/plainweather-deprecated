import React from "react"

const Header = props => {
  return (
    <div className="text-blackText">
      <ul className="flex flex-row justify-between pt-12">
        <li className="pl-32">{props.location}</li>
        <li>{props.date}</li>
        <li className="pr-32">Abhinav Palacharla</li>
      </ul>
    </div>
  )
}

export default Header
