import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import tsawer from '../assets/index.js';

export default function Control() {
  const [sensorData, setSensorData] = useState({
    Vibration: 0,
    Pressure: 0,
    Temperature: 0,
    Volume: 0,
    Luminosity: 0,
  });

  useEffect(() => {
    const socket = io('http://tn56.loca.lt', {
      transports: ['websocket', 'polling'], // Ensure compatibility
    });
    
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('sensor_update', (data) => {
      // check the data structure sent by the server
      if (data.Vibration) {
        setSensorData(data);
      }
    });
  }, []);

  return (
    <main className="bg-[#F5F5F5] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col w-full">
          {/* Sentiments Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-lato font-semibold mb-4">Choose your Sentiments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tsawer.map((image, index) => (
                <div
                  key={index}
                  className="w-full max-w-[256px] mx-auto flex justify-center items-center bg-white h-[171px] shadow-2xl rounded-2xl"
                >
                  <img
                    src={image}
                    alt={`Sentiment ${index + 1}`}
                    className="max-w-[95px] max-h-[95px] object-contain"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Control Sensors and Metrics Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Control Sensors */}
            <section className="w-full md:w-1/2">
              <h2 className="text-2xl font-lato font-semibold mb-4">Control Sensors</h2>
              {[
                { name: 'Vibration', value: sensorData.Vibration, color: 'green-600', width: `${sensorData.Vibration * 10}%` },
                { name: 'Pressure', value: sensorData.Pressure, color: 'red-400', width: `${sensorData.Pressure * 10}%` },
                { name: 'Temperature', value: sensorData.Temperature, color: 'blue-600', width: `${sensorData.Temperature * 10}%` },
              ].map((sensor) => (
                <div
                  key={sensor.name}
                  className="w-full p-5 bg-white rounded-md mb-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{sensor.name}</span>
                    <span className="font-semibold">{sensor.value}</span>
                  </div>
                  <div
                    className={`h-1 bg-${sensor.color}`}
                    style={{ width: sensor.width }}
                  ></div>
                </div>
              ))}
            </section>

            {/* Volume and Luminosity Metrics */}
            <section className="w-full md:w-1/2 flex justify-around space-x-4">
              {[
                { name: 'Volume', percentage: sensorData.Volume, color: 'bg-red-400' },
                { name: 'Luminosity', percentage: sensorData.Luminosity, color: 'bg-yellow-400' },
              ].map((metric) => (
                <div
                  key={metric.name}
                  className="flex flex-col items-center w-full"
                >
                  <div className="w-[50%] relative h-48 bg-white rounded-xl shadow-lg">
                    <div
                      className={`w-full absolute bottom-0 rounded-b-2xl ${metric.color}`} 
                      style={{ height: `${metric.percentage}%` }}
                    ></div>
                    <span className="absolute top-1/2 left-0 w-full text-center font-bold">
                      {metric.percentage}%
                    </span>
                  </div>
                  <span className="mt-2 font-bold">{metric.name}</span>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
