import React from 'react'
import Sidebar from '../../partials/Sidebar'
import PortalNav from './PortalNav'

const Portal = () => {
  return (
  <>
      <div className="flex h-screen overflow-hidden">
         {/* Sidebar */}
         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
         
        </div>


  </>
  )
}

export default Portal