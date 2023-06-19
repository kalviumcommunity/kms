import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/"><h3>Dashboard</h3></Link>
        <Link to="/assignments"><h3>Assignements</h3></Link>
        <Link to="/discussion"><h3>Discussion</h3></Link>
        <Link to="/notification"><h3>Notification</h3></Link>
        <Link to="/tickets"><h3>Tickets</h3></Link>
        <Link to="/announcements"><h3>Announcements</h3></Link>
    </div>
  )
}

export default Navbar;
