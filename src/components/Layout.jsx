import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '/Logo.png'; 


function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 p-6 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-64'
        } transition-transform duration-300 fixed md:relative`}
      >
        <div className="flex items-center justify-between mb-8">
          <img src={logo} alt="Logo" className="h-10" />
          <button
            className="text-white md:hidden"
            onClick={toggleSidebar}
          >
            ✕
          </button>
        </div>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg ${
                  isActive
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              <img src={item.icon} alt={item.label} className="h-6" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 transition-all">
        {/* Header */}
        <header className="flex items-center justify-between bg-white p-4 shadow">
          <button
            className="text-gray-600 md:hidden"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="space-x-4">
            {/* Add user profile or other header items here */}
            <button className="text-blue-500">Profile</button>
            <button className="text-red-500">Logout</button>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 bg-gray-100 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
