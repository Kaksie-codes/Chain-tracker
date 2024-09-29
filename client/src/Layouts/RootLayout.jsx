import { Outlet, Link } from 'react-router-dom'
import './rootLayout.css'

const RootLayout = () => {
  return (
    <div className='w-screen bg-green-600 min-h-screen'>
      <Link to='/'>
        <h3>Melstein</h3>
      </Link>      
      <Outlet/>
      </div>
  )
}

export default RootLayout