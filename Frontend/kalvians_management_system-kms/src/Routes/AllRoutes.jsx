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
        <Route path="/dashboard" element={<Home/>}></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/assignments" element={<Assignements/>}></Route>
        <Route path="/discussions" element={<Discussions/>}></Route>
        <Route path="/tickets" element={<Tickets/>}></Route>
        <Route path="/announcements" element={<Announcements/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/notifications" element={<Notifications/>}></Route>
    </Routes>
  )
}

export default AllRoutes