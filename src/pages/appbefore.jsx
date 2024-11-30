import React, { useState } from 'react'
import { Routes, Route, Link, useNavigate, NavLink, Outlet } from 'react-router-dom'

// Shared components and assets
import logo from '../../public/Logo.png'
import lines from '../../public/Lines.png'
import teacher from '../../public/Teacher.png'
import house from '../../public/House.png'
import smartphone from '../../public/Icon - Devices.png' 
import settings from '../../public/Settings.png'
import patients from '../assets/Patients'

const Layout = (children  ) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  
  const NavItems = [
    { 
      to: "/dashboard", 
      icon: house, 
      label: "Monitoring",
      activeClassName: "bg-teal-800 text-white"
    },
    { 
      to: "/dashboard/control", 
      icon: house, 
      label: "DashBoard",
      activeClassName: "bg-teal-800 text-white"
    },
    { 
      to: "/dashboard/board", 
      icon: smartphone, 
      label: "Control Panel",
      activeClassName: "bg-teal-800 text-white"
    },
  ];

  return (
    <div className='flex bg-[#F5F5F5] min-h-screen'>
      {/* Mobile Menu Toggle */}
      <button 
        className='fixed top-4 left-4 z-50 md:hidden'
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-[#274C77]" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
      </button>
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 bg-white shadow-xl transform 
        ${isMobileMenuOpen ? 'w-64' : 'w-0'}
        md:translate-x-0 transition-all duration-300 ease-in-out
        flex flex-col justify-between overflow-y-auto
      `}>
        <div>
          {/* Navigation Items */}
          <nav className='w-full flex flex-col gap-2 p-4 mt-16 md:mt-0'> 
            {NavItems.map((item) => (
              <NavLink 
                key={item.to}
                to={item.to} 
                className={({ isActive }) => `
                  text-[#274C77] pl-6 text-xl flex items-center gap-4 p-3 
                  rounded-r-3xl py-3 transition-colors group
                  ${isActive ? item.activeClassName : 'hover:bg-teal-50'}
                `}
              >
                <img 
                  src={item.icon} 
                  width={30} 
                  alt={item.label} 
                  className='group-hover:scale-110 transition-transform'
                />
                <div className='font-bold'>{item.label}</div>
              </NavLink>
            ))}
          </nav>
          
          {/* Quick Patient Access */}
          <div className='mt-4 border-t pt-4 px-4'>
            <span className='text-sm font-semibold text-gray-600 block mb-2'>
              Quick Patient Access
            </span>
            <div className='max-h-64 overflow-y-auto'>
              {patients.map((patient) => (
                <div 
                  key={patient.id} 
                  className='text-[#274C77] flex items-center gap-4 p-2 
                             hover:bg-teal-50 rounded-lg transition-colors 
                             cursor-pointer text-sm pl-6'
                  onClick={() => {
                    navigate(`/dashboard/patient/${patient.id}`);
                  }}
                >
                  {patient.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Help Section */}
        <div className='bg-gradient-to-r from-slate-400 to-[#2B4C40] 
                        rounded-2xl p-6 text-center m-4'>
          <span className='text-white font-bold block mb-4'>Need Help?</span>
        <Link to="/contact">
          <button
            className='bg-white w-full rounded-lg py-2 text-sm 
                      hover:bg-gray-100 transition-colors'
          >
            Contact Support
          </button>
        </Link>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className='flex-1 md:ml-64'>
        <header className="flex w-full justify-between items-center p-12"> 
        <img 
          src={lines} 
          alt="Toggle Menu" 
          className="cursor-pointer" 
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }} 
        />
        <img src={logo}/>  
        <img src={teacher}/> 
        </header> 
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}


export default Layout;
