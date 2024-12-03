import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import img6 from '/Group 1000001772.png';
import img7 from '/Group 37.png';
import img8 from '/Group 35.png';
import img9 from '/Group 1000001772 (1).png';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../../@/components/ui/card';

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

  const [graphData, setGraphData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  
  useEffect(() => {
    // Create socket connection
    const socket = io('http://tn56.loca.lt', {
      transports: ['websocket', 'polling'],
    });

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('sensor_update', (data) => {
      // Parse numeric values from strings
      const temperatureValue = parseFloat(data['Vest Temperature'].value.replace('°C', ''));
      const pressureValue = parseFloat(data.Pressure.value.replace(' KPa', ''));
      
      // Append new data point
      setGraphData(prevGraphData => [
        ...prevGraphData,
        {
          timestamp: new Date().toLocaleTimeString(),
          temperature: temperatureValue,
          pressure: pressureValue,
        },
      ]);

      const newNotifications = [];

      if (data.Pressure.state === 'High') {
        newNotifications.push({ color: 'red', message: 'High Pressure', time: 'Just now' });
      }

      if (data['Vest Temperature'].state === 'Normal') {
        newNotifications.push({ color: 'green', message: 'Temperature is Normal', time: 'Just now' });
      }

      // Append new notifications
      setNotifications(prev => [...newNotifications, ...prev.slice(0, 4)]);

      // Update sensor data using functional update
      setSensorData(prevSensorData => 
        prevSensorData.map(item => {
          if (data[item.title]) {
            return {
              ...item,
              value: data[item.title].value,
              state: data[item.title].state,
            };
          }
          return item;
        })
      );
    });

    // Cleanup function to disconnect socket when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []); // Empty dependency array - only run once on mount

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
          <div
            className="bg-white p-6 rounded-xl shadow-lg 
                        transition duration-300 ease-in-out 
                        transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-[#274C77] font-bold text-xl mb-4">Notifications</h2>
            {notifications.map((notification, index) => (
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
          <div className="bg-white p-6 rounded-xl shadow-lg 
                          transition duration-300 ease-in-out 
                          transform hover:scale-105 hover:shadow-xl 
                          text-center text-gray-500">
            <Card>
              <CardHeader>
                <CardTitle>Sensor History</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart width={700} height={400} data={graphData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="timestamp" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="temperature"
                    stroke="#2563eb"
                    name="Temperature (°C)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="pressure"
                    stroke="#16a34a"
                    name="Pressure (KPa)"
                  />
                </LineChart>
              </CardContent>
            </Card>
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