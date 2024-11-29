import React from 'react';
import tsawer2 from '../assets/tsawer2.js';

export default function Home() { 
  return (
    <main className='bg-[#F5F5F5] min-h-screen p-8'> 
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>  
          {/* Statistics Grid */}
          <div className='grid grid-cols-2 gap-6'> 
            {tsawer2.map((item, index) => (
              <div 
                key={index} 
                className='bg-white p-6 shadow-lg rounded-xl 
                           transition duration-300 ease-in-out 
                           transform hover:scale-105 hover:shadow-xl 
                           flex justify-between items-center'
              > 
                <div className='space-y-3 text-[#274C77]'> 
                  <h3 className='text-lg font-semibold'>{item.title}</h3>  
                  <div className='text-2xl font-bold'>{item.value}</div>  
                  <span className='inline-block px-3 py-1 
                                   text-sm text-white 
                                   bg-[#6BA15D] rounded-full'
                  >
                    {item.state}
                  </span> 
                </div> 
                <img src={item.img} alt={item.title} className='w-20 h-20 object-contain'/>
              </div>
            ))}
          </div>

          {/* Notifications Panel */}
          <div className='bg-white p-6 rounded-xl shadow-lg 
                          transition duration-300 ease-in-out 
                          transform hover:scale-105 hover:shadow-xl'> 
            <h2 className='text-[#274C77] font-bold text-xl mb-4'>Notifications</h2>  
            
            {[
              { color: 'red', message: 'High Pression', time: '5 minutes ago' },
              { color: 'green', message: 'Temperature Good', time: '15 minutes ago' },
              { color: 'green', message: 'Joy sentiment is active', time: '25 minutes ago' }
            ].map((notification, index) => (
              <div key={index} className='mb-3'>
                <div className='flex items-center space-x-2'>
                  <div className={`w-2 h-2 bg-${notification.color}-600 rounded-full`}></div>
                  <span className='font-medium'>{notification.message}</span>
                </div>
                <div className='text-sm text-gray-500 ml-4'>{notification.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Graphs Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'> 
          <div className='bg-white p-6 rounded-xl shadow-lg 
                          transition duration-300 ease-in-out 
                          transform hover:scale-105 hover:shadow-xl 
                          text-center text-gray-500'> 
            Graph Goes Here
          </div> 
          
          <div className='bg-white p-6 rounded-xl shadow-lg 
                          transition duration-300 ease-in-out 
                          transform hover:scale-105 hover:shadow-xl 
                          text-center text-gray-500'> 
            Prediction Goes Here
          </div>
        </div>
      </div>
    </main>
  );
}