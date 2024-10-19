import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './utils/Sidebar';
import Navbar from './utils/Navbar';
import { ToastContainer } from 'react-toastify';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div className='w-full h-full min-h-screen dark:bg-[#131720] flex gap-2'>
      <Sidebar
        isCollapsed={isCollapsed} setCurrentPage={setCurrentPage}
        isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className='relative w-full h-screen overflow-auto md:px-4 py-12 lg:py-4 text-white'>
        <Navbar
          isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}
          isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
          currentPage={currentPage}
        />
        <Outlet />
        <ToastContainer />
      </div>
    </div>
  )
}

export default App
