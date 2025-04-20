🧠 Sensory Scape
Sensory Stimulation Vest for Autistic Children

Version License Status Award

Sensory Scape Vest

🏆 3rd Place Winner – TN2056 Challenge @ IEEE TSYP Congress 12, Tunisia

🌟 Overview
Sensory Scape is a wearable assistive technology designed to support autistic children through customizable sensory stimulation. Our smart vest connects to a real-time dashboard that allows specialists to adapt the sensory experience based on each child's unique needs and preferences.

The project empowers neurodiverse users with comfort, calm, and control—built by a passionate team of young innovators dedicated to improving quality of life through accessible technology.

💡 Key Features
👕 Smart Vest with embedded haptic and sensory modules
🧑‍⚕️ Specialist Dashboard for live control and monitoring
🔁 Real-Time Communication using WebSocket technology
🧠 Customizable Feedback Patterns (vibration, temperature, pressure, sound, etc.)
📊 Data Analysis for tracking progress and optimizing therapy
🎯 Why Sensory Scape?
Sensory processing differences affect up to 90% of autistic individuals. Our solution provides:

Personalized Therapy: Each child has unique sensory needs that change over time
Dynamic Control: Therapists can adjust parameters in real-time during sessions
Progress Tracking: Data collection to monitor effectiveness and adaptations
Comfort-First Design: Lightweight, non-restrictive, and sensory-friendly materials
Empowerment: Gives children agency in their sensory regulation journey
🛠️ Tech Stack
Hardware:

Vibration motors, pressure pads, temperature modules
Rechargeable battery system
Communication:

WebSockets over Wi-Fi
Local data storage for offline functionality
Software:

Frontend: React.js + Tailwind CSS
Backend: Node.js (Express) WebSocket Server
Data Analytics: Python + Pandas
🔌 Real-Time System Architecture
[Dashboard UI] <--WebSocket--> [Node.js Server] <--Serial/Bluetooth--> [Microcontroller (Vest)]
Dashboard sends sensory commands through a WebSocket to the server
Server forwards commands to the microcontroller via serial or wireless communication
Vest responds with corresponding physical feedback (e.g., vibration patterns)
Sensor data flows back to the dashboard for monitoring and analysis
📊 Dashboard Preview
Sensory Scape Dashboard

The intuitive dashboard allows specialists to:

Select different sensory modules to activate
Adjust intensity, duration, and patterns
View real-time biometric feedback
Save and load profiles for quick session setup
Generate reports for progress tracking
🚀 Getting Started
1. Clone the Repository
git clone https://github.com/yourusername/sensory-scape.git
cd sensory-scape
2. Install Dashboard Dependencies
cd dashboard
npm install
npm start
3. Run the WebSocket Server
cd backend
npm install
node server.js
4. Upload Firmware
Upload the Arduino/ESP32 firmware located in the /firmware folder using the Arduino IDE.

5. Connect Everything
Power on the vest
Connect via serial/Bluetooth/Wi-Fi
Open the dashboard and start controlling stimuli live!
📂 Project Structure
sensory-scape/
├── Sensoryscape-main/           # React-based frontend
│   ├── src/             # React components
│   ├── public/          # Static assets
│   └── package.json     # Dependencies
├── Sensoryscape-backend/             # Node.js WebSocket server
│   ├── server.js        # Main server file
│   ├── controllers/     # Business logic
│   └── models/          # Data models
├── ML model/            # machine learning models
│   ├── main/            # Main models
├── docs/                # Documentation & diagrams
└── README.md            # You are here
🔄 Development Roadmap
 Prototype development and testing
 Initial dashboard implementation
 Basic sensory feedback modules
 Basic ML model for detecting abnormal behavior
 IEEE TSYP Congress 12 presentation
 Enhanced data analytics platform
 Mobile companion app development
 Machine learning for pattern recognition
 Clinical trials and validation
 Open-source hardware release
📸 Demo & Media
🎥 Watch our pictures at The TSYP Congress 12 Pitch
👥 Meet the Team

Iheb Ben Taieb
Project Lead	
Chater Marzougui
ICT enginner	
nermine ezzine
ICT enginner
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgements
Thanks to the IEEE Tunisia Section & TSYP Congress 12 organizers
Inspired by the needs of neurodiverse children and their families
Gratitude to the open-source communities whose libraries made this possible
