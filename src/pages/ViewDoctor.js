import React from 'react'
import DoctorProfile from '../Components/Card'
import ResponsiveAppBar from '../Components/Navbar'
import { useLocation } from "react-router-dom";

export default function ViewDoctor() {
    const location = useLocation();
    const {id, email, joined, fullnames, location2} = location.state;
  return (
      <>
    <ResponsiveAppBar />
    <DoctorProfile id={id} email={email} joined={joined} fullnames={fullnames} location={location2}/>
    </>
  )
}
