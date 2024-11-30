import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import img6 from '/Group 1000001772.png';
import img7 from '/Group 37.png';
import img8 from '/Group 35.png';
import img9 from '/Group 1000001772 (1).png';

const Home = () => {
  const [sensorData, setSensorData] = useState([
    {
      img: img6,
      title: 'Vest Temperature',
      value: '36°C',
      state: 'Normal',
    },
    {
      img: img7,
      title: 'Heart Rate',
      value: '98 bpm',
      state: 'Normal',
    },
    {
      img: img8,
      title: 'Respiratory Rate',
      value: '15',
      state: 'Normal',
    },
    {
      img: img9,
      title: 'Pressure',
      value: '22 KPa',
      state: 'Moderate',
    },
  ]);

  useEffect(() => {
    const socket = io('http://localhost:5000');

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('sensor_update', (data) => {
      // Assuming the backend sends an object with fields corresponding to the titles in `sensorData`
      const updatedData = sensorData.map((item) => {
        if (data[item.title]) {
          return {
            ...item,
            value: data[item.title].value,
            state: data[item.title].state,
          };
        }
        return item;
      });

      setSensorData(updatedData);
    });

    return () => {
      socket.disconnect();
    };
  }, [sensorData]);

  return (
    <main className="bg-[#F5F5F5] min-h-screen p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {sensorData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-xl 
                           transition duration-300 ease-in-out 
                           transform hover:scale-105 hover:shadow-xl 
                           flex justify-between items-center"
              >
                <div className="space-y-3 text-[#274C77]">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <span
                    className={`inline-block px-3 py-1 text-sm text-white rounded-full ${
                      item.state === 'Normal'
                        ? 'bg-[#6BA15D]'
                        : item.state === 'Moderate'
                        ? 'bg-[#F59E0B]'
                        : 'bg-[#DC2626]'
                    }`}
                  >
                    {item.state}
                  </span>
                </div>
                <img src={item.img} alt={item.title} className="w-20 h-20 object-contain" />
              </div>
            ))}
          </div>

          {/* Notifications Panel */}
          <div className="bg-white p-6 rounded-xl shadow-lg 
                          transition duration-300 ease-in-out 
                          transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-[#274C77] font-bold text-xl mb-4">Notifications</h2>

            {[
              { color: 'red', message: 'High Pressure', time: '5 minutes ago' },
              { color: 'green', message: 'Temperature Good', time: '15 minutes ago' },
              { color: 'green', message: 'Joy sentiment is active', time: '25 minutes ago' },
            ].map((notification, index) => (
              <div key={index} className="mb-3">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 bg-${notification.color}-600 rounded-full`}></div>
                  <span className="font-medium">{notification.message}</span>
                </div>
                <div className="text-sm text-gray-500 ml-4">{notification.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Graphs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div
            className="bg-white p-6 rounded-xl shadow-lg 
                          transition duration-300 ease-in-out 
                          transform hover:scale-105 hover:shadow-xl 
                          text-center text-gray-500"
          >
            Graph Goes Here
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-lg 
                          transition duration-300 ease-in-out 
                          transform hover:scale-105 hover:shadow-xl 
                          text-center text-gray-500"
          >
            Prediction Goes Here
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
