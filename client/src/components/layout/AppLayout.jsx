import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
          <div>navbar</div>
          <div>sidebar</div>

          <main className='app-main-content'>
              <Outlet />
          </main>
    </div>
  )
}

export default AppLayout