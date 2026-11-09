import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const AppLayout = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [isUploadOpen, setIsUploadOpen] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onUploadClick={() => setIsUploadOpen(true)}
        onToggleSidebar = {() => setIsMobileSidebarOpen((prev) => !prev)}
      />
          <div>sidebar</div>

          <main className='app-main-content'>
              <Outlet />
          </main>
    </div>
  )
}

export default AppLayout