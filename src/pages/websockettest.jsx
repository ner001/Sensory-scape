import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../../@/components/ui/card';

const SensorDashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [latestData, setLatestData] = useState({ temperature: 0, humidity: 0 });

  useEffect(() => {
    const socket = io('http://localhost:5000');   

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('sensor_update', (data) => {
      const timestamp = new Date().toLocaleTimeString();
      setSensorData(prev => [...prev.slice(-20), { ...data, timestamp }]);
      setLatestData(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Temperature</CardTitle>
          </CardHeader>
          <CardContent className="text-4xl font-bold text-blue-600">
            {latestData.temperature.toFixed(1)}°C
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Humidity</CardTitle>
          </CardHeader>
          <CardContent className="text-4xl font-bold text-green-600">
            {latestData.humidity.toFixed(1)}%
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sensor History</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart width={800} height={400} data={sensorData}>
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
              dataKey="humidity"
              stroke="#16a34a"
              name="Humidity (%)"
            />
          </LineChart>
        </CardContent>
      </Card>
    </div>
  );
};

export default SensorDashboard;