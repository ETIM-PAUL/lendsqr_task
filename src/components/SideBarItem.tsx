import React from 'react'
import { NavLink } from 'react-router-dom';
interface Props {
  text: string;
  icon: any;
  link: string;
  // onClick: (e: any) => void;
}

const SideBarItem = ({ text, icon, link }: Props) => {
  return (
    <NavLink to={link} className={({ isActive }) => isActive ? "side_item active_link" : "side_item"}>
      <img src={icon} alt="icon_desc" className="" />
      <span className="sidebar_text">{text}</span>
    </NavLink>
  )
}

SideBarItem.defaultProps = {
  text: "",
  icon: undefined,
  link: ""
};

export default SideBarItem