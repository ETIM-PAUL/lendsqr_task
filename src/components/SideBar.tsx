import React from 'react'
import "../scss/SideBar.scss";
import SideBarItem from './SideBarItem';
import handshake from "../assets/sidebar/handshake.svg"
import home from "../assets/sidebar/home.svg"
import loans from "../assets/sidebar/loans.svg"
import piggy_bank from "../assets/sidebar/piggy-bank.svg"
import sack from "../assets/sidebar/sack.svg"
import user_friends from "../assets/sidebar/user-friends.svg"
import users from "../assets/sidebar/users.svg"
import user_check from "../assets/sidebar/user-check.svg"
import user_times from "../assets/sidebar/user-times.svg"
import briefcase from "../assets/sidebar/briefcase.svg"
import savings from "../assets/sidebar/savings.svg"
import coins from "../assets/sidebar/coins-solid.svg"
import transactions from "../assets/sidebar/transactions.svg"
import galaxy from "../assets/sidebar/galaxy.svg"
import user_cog from "../assets/sidebar/user-cog.svg"
import scroll from "../assets/sidebar/scroll.svg"
import chart_bar from "../assets/sidebar/chart-bar.svg"
import badge_percent from "../assets/sidebar/badge-percent.svg"
import sliders from "../assets/sidebar/sliders.svg"
import clipboard_list from "../assets/sidebar/clipboard-list.svg"
import tire from "../assets/sidebar/tire.svg"
import sign_out from "../assets/sidebar/sign-out.svg"

const SideBar = () => {
  return (
    <>
      <div className="sidebar_container">
        <div className='section_container top-item'>
          <img src={briefcase} alt="icon_desc" className="" />
          <span>Switch Organization</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="drop_down">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <SideBarItem icon={home} text="Dashboard" />
        <div className="section_container">
          <span className="section_heading">customers</span>
          <SideBarItem icon={user_friends} text="Users" link="/users" />
          <SideBarItem icon={users} text="Guarantors" link="" />
          <SideBarItem icon={sack} text="Loans" link="" />
          <SideBarItem icon={handshake} text="Decision Models" link="" />
          <SideBarItem icon={piggy_bank} text="Savings" link="" />
          <SideBarItem icon={loans} text="Loan Request" />
          <SideBarItem icon={user_check} text="Whitelist" link="" />
          <SideBarItem icon={user_times} text="Karma" link="" />
        </div>
        <div className="section_container">
          <span className="section_heading">Businesses</span>
          <SideBarItem icon={briefcase} text="Organization" link="" />
          <SideBarItem icon={loans} text="Loan Products" link="" />
          <SideBarItem icon={savings} text="Savings Products" link="" />
          <SideBarItem icon={coins} text="Fees and Charges" link="" />
          <SideBarItem icon={transactions} text="Transactions" link="" />
          <SideBarItem icon={galaxy} text="Services" link="" />
          <SideBarItem icon={user_cog} text="Service Account" link="" />
          <SideBarItem icon={scroll} text="Settlements" link="" />
          <SideBarItem icon={chart_bar} text="Reports" link="" />
        </div>
        <div className="section_container">
          <span className="section_heading">Settings</span>
          <SideBarItem icon={sliders} text="Preferences" link="" />
          <SideBarItem icon={badge_percent} text="Fees and Pricing" link="" />
          <SideBarItem icon={clipboard_list} text="Audit Logs" link="" />
          <SideBarItem icon={tire} text="Systems Messages" link="" />
        </div>
        <div className="logout_section">
          <div className="logout_inner">
            <img src={sign_out} alt="icon_desc" className="" />
            <span className="sidebar_text">Logout</span>
          </div>
          <span className="version_text">v1.2.0</span>
        </div>
      </div>
    </>
  )
}

export default SideBar