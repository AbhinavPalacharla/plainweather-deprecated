import React from "react"

const Header = props => {
  return (
    <div>
      <ul>
        <li>{props.location}</li>
        <li>{props.date}</li>
        <li>
          Created by:
          <br />
          Abhinav Palacharla
        </li>
      </ul>
    </div>
  )
}

export default Header
