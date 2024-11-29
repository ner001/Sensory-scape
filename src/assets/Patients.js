import tfol from '../../public/child.png'; 
const patients = [
    {
      id: 1,
      img: tfol, // Assuming 'tfol' is a valid variable referencing the image 
      name:"Tastousa",
      age: 5,
      Gender: "Male",
      Location: "La Marsa, Tunis",
      GuardiansName: "Samia Trabelsi",
      StartedSince: "March 2nd, 2019", 
      ProgressInTreatment:"40%",
      BriefDescription:
        "TASTOUSA is hyposensitive. He does not react to sounds or pay attention to people talking. " +
        "He is the only child of a couple. His parents do not have the necessary budget to treat him; " +
        "he is here on financial aid.",
      Needs: [
        "Touch sensitivity",
        "Learn to respond to sounds",
        "Financial aid"
      ],
      HistoryAndSessions: [
        { date: "JAN 2nd, 2024", by: "Dr. Foulen", note: "Sensitive to pressure" },
        { date: "MAR 3rd, 2024", by: "Dr. Foulen", note: "Patient started familiarizing" },
        { date: "APR 1st, 2024", by: "Dr. Foulen", note: "Patient responds to pressure well" }
      ],
      ImportantNotes: ["Epileptic", "Hyposensitive", "Fast learner"],
      RestrictedSensors: ["No vibration", "No loud sounds"], 
      State:"In Session"
    },
    {
      id: 2,
      img: tfol,  
      name:"Chahba",// Replace with the appropriate image reference
      age: 8,
      Gender: "Female",
      Location: "Sfax, Tunisia",
      GuardiansName: "Ali Ben Ahmed",
      StartedSince: "May 10th, 2020", 
      ProgressInTreatment:"20%",

      BriefDescription:
        "RAHMA has ADHD and struggles with maintaining focus and managing emotions. " +
        "She comes from a family of five and her parents are fully supportive of her therapy.",
      Needs: [
        "Focus improvement",
        "Emotional regulation",
        "Behavioral therapy"
      ],
      HistoryAndSessions: [
        { date: "FEB 15th, 2023", by: "Dr. Amira", note: "Difficulty focusing" },
        { date: "JUN 10th, 2023", by: "Dr. Amira", note: "Started responding to visual cues" },
        { date: "SEP 1st, 2023", by: "Dr. Amira", note: "Improved emotional regulation" }
      ],
      ImportantNotes: ["ADHD", "Highly energetic", "Visual learner"],
      RestrictedSensors: ["No flashing lights", "Minimize distractions"], 
      State:"Inactive"

    }
  ];
  export default patients;