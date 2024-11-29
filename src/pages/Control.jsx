import React from 'react';
import tsawer from '../assets/index.js';

export default function Control() { 
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
                { name: 'Vibration', value: 8, color: 'green-600', width: '80%' },
                { name: 'Pressure', value: 2, color: 'red-400', width: '20%' },
                { name: 'Temperature', value: 5, color: 'blue-600', width: '50%' }
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
                { name: 'Volume', percentage: 50, color: 'red-800' },
                { name: 'Luminosity', percentage: 80, color: 'yellow-400' }
              ].map((metric) => (
                <div 
                  key={metric.name} 
                  className="flex flex-col items-center w-full"
                >
                  <div className="w-[50%] relative h-48 bg-white rounded-xl shadow-lg">
                    <div 
                      className={`w-full absolute bottom-0 rounded-b-2xl bg-${metric.color}`}
                      style={{ height: `${metric.percentage}%` }}
                    ></div>
                    <span className="absolute top-1/2 left-0 w-full text-center text-white font-bold">
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

/*import tsawer from '../assets/index.js'


export default function Control() { 
 
  return (
    <main className='bg-[#F5F5F5] min-h-screen'> 
      <div className='flex w-full justify-start items-center container mx-auto space-y-8'> 
        <div className=' flex flex-col justify-center  items-center w-[75%]'>  
          <div className=' w-full p-4 text-[22px] font-lato font-semibold '>Choose your Sentiments.</div>
          <div className='grid grid-cols-3 gap-16 w-full p-4'> 
            {tsawer.map((image, index) => ( 
            <div className='w-[256px] flex justify-center items-center  bg-white h-[171px] shadow-2xl rounded-2xl'>
              <img key={index} width={95} src={image} alt={`Image ${index + 1}`} className="image-item" /> 
            </div>
             ))}
            
          </div> 
          <div className='flex w-full justify-between items-center gap-y-3 p-6'>  
          <div className='flex flex-col w-full gap-6'>
            <span className=' w-full p-4 text-[22px] font-lato font-semibold '>Control Sensors</span> 
            <div className='w-[80%] p-5 bg-white rounded-md flex flex-col justify-start items-start'> 
              <div className='w-full flex justify-between items-center'> 
                <span className='font-semibold'>Vibration</span> 
                <span className='font-semibold'>8</span>
              </div> 
              <div className='w-[80%] h-1 bg-green-600'></div>
            </div> 
            <div className='w-[80%] p-5 bg-white rounded-md flex flex-col justify-start items-start'> 
              <div className='w-full flex justify-between items-center'> 
                <span className='font-semibold'>Pressure</span> 
                <span className='font-semibold'>2</span>
              </div> 
              <div className='w-[20%] h-1 bg-red-400'></div>
            </div> 
            <div className='w-[80%] p-5 bg-white rounded-md flex flex-col justify-start items-start'> 
              <div className='w-full flex justify-between items-center'> 
                <span className='font-semibold'>Temperature</span> 
                <span className='font-semibold'>5</span>
              </div> 
              <div className='w-[50%] h-1 bg-blue-600'></div>
            </div>

          </div>  
          <div className='  flex  justify-around w-full text-center'> 
            <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-[50%] relative h-48 bg-white rounded-xl  shadow-lg'> 
              <div className='w-full h-[60%] absolute bottom-0 rounded-b-2xl bg-red-800'>  
              

              </div> 
              <span className=' absolute top-[50%] left-0 text-white font-bold text-center w-full'>50%</span> 
            </div>  
            <span className='w-full text-center font-bold '>Volume</span>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-[50%] relative h-48 bg-white rounded-xl  shadow-lg'> 
              <div className='w-full h-[80%] absolute bottom-0 rounded-b-2xl bg-yellow-400'>  
              

              </div> 
              <span className=' absolute top-[50%] left-0 text-white font-bold text-center w-full'>80%</span> 
            </div>  
            <span className='w-full text-center font-bold '>Luminosity</span>
            </div>
          </div> 
          </div>
        </div> 

      </div>
    </main>
  )
}
*/