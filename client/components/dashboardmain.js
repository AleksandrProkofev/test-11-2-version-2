import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title"> Main </div>
      <Link to="/dashboard/profile/ed9b11af-7836-43aa-beda-eba2770c68ec"> Go To Profile <br /> </Link>
      <Link to="/dashboard"> Go To Root </Link>
    </div>
  )
}
DashboardMain.propTypes = {}

export default DashboardMain
