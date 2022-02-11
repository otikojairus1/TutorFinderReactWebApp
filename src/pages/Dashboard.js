import React from 'react'
import DoctorList from '../Components/DoctorList'
import { 
  useLocation} from "react-router-dom";
import ResponsiveAppBar from '../Components/Navbar'

export default function Dashboard() {
  const location = useLocation();
  let name = location.state.name;
  return (
    <>
    <ResponsiveAppBar />
   
    <DoctorList />
    </>

  )
}


