import React, { useState } from 'react';
import screen1 from '../../public/Group 10.png';
import screen2 from '../../public/Group 11.png'; 
import patients from '../assets/Patients';

export default function Board(){
  const [searchTerm, setSearchTerm] = useState('');

  // Filter patients based on search term
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.GuardiansName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className='bg-[#F5F5F5] min-h-screen p-8'> 
      <div className='container mx-auto space-y-8'>
        {/* Patient Statistics Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'> 
          <div className='bg-white p-6 rounded-xl shadow-lg flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <img src={screen1} alt="Total Patients" className='w-16 h-16'/>   
              <div>
                <div className='text-[#ACACAC] text-sm'>Total Patients:</div> 
                <div className='font-extrabold text-2xl text-[#274C77]'>{patients.length}</div> 
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-lg flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <img src={screen2} alt="Patients In Session" className='w-16 h-16'/>   
              <div>
                <div className='text-[#ACACAC] text-sm'>Patients In Session:</div> 
                <div className='font-extrabold text-2xl text-[#16C098]'>
                  {patients.filter(patient => patient.State === "In Session").length}
                </div> 
              </div>
            </div>
          </div>
        </div>

        {/* Patient List Section */}
        <div className='bg-white p-6 rounded-xl shadow-lg'>  
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'> 
            <div className='mb-4 md:mb-0'>
              <h2 className='text-2xl font-extrabold text-[#274C77]'>Centre de l'Expert</h2> 
              <p className='text-xl text-[#16C098]'>Student Names</p>
            </div> 
            
            <input 
              type='text' 
              placeholder='Search patients...' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='bg-[#F9FBFF] w-full md:w-1/3 h-10 px-4 rounded-lg 
                         border border-gray-200 focus:outline-none 
                         focus:ring-2 focus:ring-[#16C098]'
            />
          </div> 

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-">
                <tr>
                  {['Patient Name', 'Traits', "Guardian's Name", 'Level', 'State'].map((header) => (
                    <th 
                      key={header} 
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 whitespace-nowrap">{patient.name}</td>
                    <td className="px-4 py-4">{patient.ImportantNotes.join(', ')}</td>
                    <td className="px-4 py-4">{patient.GuardiansName}</td>
                    <td className="px-4 py-4">{patient.ProgressInTreatment}</td>
                    <td className="px-4 py-4">
                      <span 
                        className={`px-3 py-1 inline-block rounded-full text-xs font-semibold ${
                          patient.State === 'In Session'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {patient.State || 'Not Assigned'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredPatients.length === 0 && (
              <div className='text-center py-6 text-gray-500'>
                No patients found matching your search.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}