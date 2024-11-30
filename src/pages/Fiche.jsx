import smartphone from '../../public/Icon - Devices.png' 
import house from '../../public/House.png'; 
import settings from '../../public/Settings.png';  
import patients from '../assets/Patients'; 
import { useParams } from 'react-router-dom';

export default function Fiche() {  
  const { patientId } = useParams();

  // Find the patient based on the patientId from the URL
  const patient = patients.find(p => p.id === Number(patientId));

  console.log(patientId);
  return (
    <main className='bg-[#F5F5F5] min-h-screen'> 
      <div className='flex w-full justify-between items-start'>   
        <div className='w-[85%] px-12 flex justify-around items-center '>  
            <div className='w-[50%] flex flex-col justify-start items-center '> 
                <div className='flex flex-col gap-3 w-full justify-center py-5 items-center shadow-2xl rounded-2xl'> 
                    <img src={patient.img} width={180}/> 
                    <span className='text-center text-2xl w-full'> {patient.name}</span>
                </div>  
                <div className='flex  flex-col justify-start px-2 w-full py-20 items-start shadow-2xl rounded-2xl'> 
                    <span>Progress in treatment</span> 
                    <span className='font-bold text-3xl'>{patient.ProgressInTreatment}</span>
                </div>
            </div> 
            
        </div>    
        <div className='w-full mr-14 gap-4  flex flex-col justify-start items-center'> 
          <div className='bg-white px-9 py-5 rounded-2xl shadow-xl w-full flex flex-col justify-start items-start'> 
            <div className='w-full flex justify-start items-center font-bold text-[#696969] '>⚬ Demographic</div>  
            <span className='w-[94%] h-1 bg-green-700'></span> 
            <div className='flex w-[80%] justify-between items-center'> 
              <span className='text-[#696969] font-bold'>Age:</span> 
              <span>{patient.age}</span>
            </div> 
            <div className='flex w-[80%] justify-between items-center'> 
              <span className='text-[#696969] font-bold'> Gender:</span> 
              <span>{patient.Gender}</span>
            </div> 
            <div className='flex w-[80%] justify-between items-center'> 
              <span className='text-[#696969] font-bold'>Location:</span> 
              <span>{patient.Location}</span>
            </div> 
            <div className='flex w-[80%] justify-between items-center'> 
              <span className='text-[#696969] font-bold'>Guardian's Name:</span> 
              <span>{patient.GuardiansName}</span>
            </div>
            <div className='flex w-[80%] justify-between items-center'> 
              <span className='text-[#696969] font-bold'>Started Since:</span> 
              <span>{patient.StartedSince}</span>
            </div> 
           

          </div> 
          <div className='bg-white px-9 py-5 rounded-2xl shadow-xl w-full flex flex-col justify-start items-start'>   
                <div className='w-full flex justify-start items-center font-bold text-[#696969] '>⚬ Brief Description:</div>  
                <span className='w-[94%] h-1 bg-green-700'></span>   
                <span>{patient.BriefDescription}</span>
          </div> 
          <div className='bg-white px-9 py-5 rounded-2xl shadow-xl w-full flex flex-col justify-start items-start'>   
                <div className='w-full flex justify-start items-center font-bold text-[#696969] '>⚬ Needs:</div>  
                <span className='w-[94%] h-1 bg-green-700'></span>   
                <div className='flex flex-col'>{patient.Needs.map((e)=>(<span> 🟢 {e}</span>))}</div>
          </div> 
          <div className='bg-white px-9 py-5 rounded-2xl shadow-xl w-full flex flex-col justify-start items-start'>   
                <div className='w-full flex justify-start items-center font-bold text-[#696969] '>⚬  History and Sessions:</div>  
                <span className='w-[94%] h-1 bg-green-700'></span>   
                <div className='flex flex-col gap-7 justify-center items-center w-full'> 
                  {patient.HistoryAndSessions.map((e)=>(<div className='flex flex-col w-full justify-between items-center'>  
                    <div className='flex w-full justify-between items-center'> 
                    <div className='w-[25%] font-semibold text-[#2A4C40]'>{e.date}</div> 
                    <div className='w-[20%] font-extrabold '>{e.by}</div>
                    <div className='w-[60%] '>{e.note}</div> 
                    </div> 
                    <span className='w-full h-[1px] bg-black'></span>   



                  </div>))}
                </div>
          </div> 
          <div className='w-full flex justify-between items-center'> 
            <div className='bg-[#D1FFC0] w-[45%] h-32 rounded-xl px-5  flex flex-col justify-start items-start'> 
              <span className='w-full flex justify-center font-semibold text-[#01AA7E] items-center'>Important notes:</span> 
              <div className='flex w-full justify-start items-start flex-col'>{patient.ImportantNotes.map((e)=>(<span> 🟢 {e}</span>))}</div>

            </div> 
            <div className='bg-white w-[45%] h-32 rounded-xl px-5  flex flex-col justify-start items-start'> 
              <span className='w-full flex justify-center font-semibold text-[#E33C21] items-center'>Restricted Sensors:</span> 
              <div className='flex w-full justify-start items-start flex-col '>{patient.RestrictedSensors.map((e)=>(<span> 🔴 {e}</span>))}</div>

            </div>
          </div>

            
        </div>  
        
      </div>
    </main>
  )
}