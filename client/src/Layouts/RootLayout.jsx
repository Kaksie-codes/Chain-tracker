import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './rootLayout.css'

const RootLayout = () => {
  return (
    <div className='Root-Layout'>
      <Link to='/edwawryhtryj'>
        <h3>Melstein</h3>
      </Link>      
      <Outlet/>
      </div>
  )
}

export default RootLayout