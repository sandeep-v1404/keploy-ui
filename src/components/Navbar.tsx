import React from "react"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/testruns">Testruns</Link> | <Link to="/">Home</Link>
      </nav>
    </div>
  )
}

export default Navbar
