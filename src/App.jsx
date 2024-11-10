import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import AppSidebar from './utils/AppSidebar';

function App() {

  return (
    <div className='w-full h-full min-h-screen bg-gray-100 dark:bg-[#131720] flex gap-2'>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className='text-black dark:text-white' />
        <div className='relative w-full h-screen overflow-auto md:px-4 py-12 lg:py-4 text-white'>
          <Outlet />
          <ToastContainer />
        </div>
      </SidebarProvider>
    </div>
  )
}

export default App
