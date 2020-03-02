import React, { Component } from "react"
import { withRouter, NavLink } from 'react-router-dom'
import { MdFavoriteBorder, MdHome, MdSearch, MdPerson } from 'react-icons/md'


function Navbar(props) {
  const {pathname} = props.history.location
  
  if( pathname === '/login' || pathname === '/signup') return null
  return (
    
    <nav>
      <div className="navbar">
        <NavLink 
        activeClassName="active" 
        to="/home" 
        ><MdHome 
        size="35px" 
        />Home</ NavLink>
      </div>
      <div className="navbar">
        <NavLink activeClassName="active" to="/favorites"><MdFavoriteBorder size="35px" />My list</ NavLink>
      </div>
      <div>

        <NavLink to="/food"/>
      </div >
      <div className="navbar" >
       
        <NavLink activeClassName="active" to="/search" ><MdSearch size="35px"/>Search</ NavLink>
      </div>
      <div className="navbar" >
        <NavLink activeClassName="active" to="/profile" ><MdPerson size="35px"/>Profile</ NavLink>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
