<div align="center">

💻 Blind Assist AI
🤖 Empowering Independence Through AI

An AI-powered assistive web application designed to help visually impaired individuals understand their surroundings through real-time object detection and voice feedback.

</div>

🤖 About the Project

Blind Assist AI is a React-based assistive technology project that uses a webcam and machine learning to identify objects in the user's surroundings.

The application provides spoken feedback about detected objects, helping visually impaired individuals gain better awareness of their environment.

Our goal is to make everyday interactions more accessible through artificial intelligence and voice-based assistance.

⚙️ Key Features
Feature	Description
📷 Real-Time Camera	Captures the surrounding environment using a webcam.
🤖 AI Object Detection	Identifies everyday objects using the COCO-SSD model.
🔊 Voice Feedback	Announces detected objects using text-to-speech.
🎙️ Voice Commands	Recognises the command "What do you see?"
🎯 Confidence Filtering	Filters object detections using a 50% confidence threshold.
💻 Accessibility	Combines object recognition with audio assistance.
🛠️ Technology Stack

<div align="center">

Technology	Application
⚛️ React.js	Frontend development
💻 JavaScript	Application logic
🧠 TensorFlow.js	Browser-based machine learning
📦 COCO-SSD	Object detection
🌐 HTML5	Web application structure
🎨 CSS3	User interface styling
🎙️ Web Speech API	Voice recognition and speech output

</div>

📂 Project Structure
Blind-Assistance-System/
│
├── 📁 public/
│   └── index.html
│
├── 📁 src/
│   ├── App.js
│   ├── ObjectDetection.js
│   ├── index.js
│   └── styles.css
│
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 .gitignore
└── 📄 README.md
⚙️ Installation & Setup
Prerequisites
Node.js
npm
Webcam
Modern web browser
Step 1: Clone the repository
git clone "https://github.com/harshitak-88/Blind-Assistance-System."
Step 2: Navigate to the project directory
cd Blind-Assistance-System.
Step 3: Install dependencies
npm install

Install the object detection dependencies:

npm install @tensorflow-models/coco-ssd @tensorflow/tfjs
Step 4: Start the application
npm start

Open your browser at:

http://localhost:3000

Allow camera and microphone permissions when prompted.

🔍 How It Works
📷 The application requests webcam access.
🧠 The COCO-SSD machine learning model loads in the browser.
🔎 Camera frames are processed to identify objects.
🎯 Detections with confidence scores above 50% are selected.
🔊 Detected objects are announced through voice feedback.
🎙️ Users can say "What do you see?" to request object detection.
🚀 Future Enhancements
🌐 Multilingual voice assistance.
📡 Improved object distance estimation.
🧠 Enhanced object detection accuracy.
⚙️ Improved accessibility features.
🔗 Integration with additional assistive technologies.
⚠️ Safety Notice

This project is an assistive technology prototype. It is not intended to replace established mobility aids such as white canes or guide dogs. It should be tested in safe environments.

👩‍💻 Contributors

Amrutha B
Harshita K
💻 Our Mission

Technology should not have barriers. We aim to use artificial intelligence to make the world more accessible, inclusive and independent for everyone.

<div align="center">

</div>
