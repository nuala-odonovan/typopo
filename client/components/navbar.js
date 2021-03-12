import React from 'react'

const NavBar = props => {
  const {user} = props

  return (
    <div className="sidenav">
      <h4>Welcome, {user.username}</h4>
    </div>
  )
}

export default NavBar
