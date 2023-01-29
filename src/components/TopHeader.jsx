import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.svg"
import profile from "../assets/profile.svg"
import bell from "../assets/bell.svg"
import dropdown from "../assets/dropdown.svg"

import "../scss/TopHeader.scss"
const TopHeader = () => {
  return (
    <div className="container">
      <div>
        <div className="header_div">
          <div className="company_logo_search">
            <img src={logo} alt="company_logo" />
            <div className="input_container">
              <div className="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="search-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <input className="input-field" type="search" placeholder="Search for anything" name="search" />
            </div>
          </div>
          <div className="other_links">
            <NavLink to="/docs">
              <span className="docs">Docs</span>
            </NavLink>
            <NavLink to="/docs">
              <img src={bell} className="notifications" width={20} />
            </NavLink>
            <img src={profile} alt="profile_pic" className="profile_img" width={40} />
            <span className="username">Adedeji</span>
            <img src={dropdown} width={15} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default TopHeader