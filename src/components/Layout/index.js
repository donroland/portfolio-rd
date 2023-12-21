import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className='page'>
        <Outlet />
        <p>Lorem lorem lorem</p>
      </div>
    </div>
  )
}

export default Layout
