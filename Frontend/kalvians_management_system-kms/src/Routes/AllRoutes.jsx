import React from 'react'
import { Routes, Route } from "react-router-dom";
import Announcements from '../Pages/Announcements';
import Assignements from '../Pages/Assignements';
import Discussions from '../Pages/Discussions';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Notifications from '../Pages/Notifications';
import Profile from '../Pages/Profile';
import Registration from '../Pages/Registration';
import Tickets from '../Pages/Tickets';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home></Home> }></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/assignments" element={<Assignements></Assignements>}></Route>
        <Route path="/discussions" element={<Discussions></Discussions>}></Route>
        <Route path="/tickets" element={<Tickets></Tickets>}></Route>
        <Route path="/announcements" element={<Announcements></Announcements>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/notifications" element={<Notifications></Notifications>}></Route>
    </Routes>
  )
}

export default AllRoutes