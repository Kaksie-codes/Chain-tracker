import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const DashboardLayout = () => {
  return (
    <div className='w-screen bg-custom-gradient min-h-screen flex'>  
      <Sidebar/>   
      <section className='flex-1'>
        <Outlet/>
      </section>
    </div>
  )
}

export default DashboardLayout