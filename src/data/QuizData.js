const QuizData = {
  xr: {
    title: "XR Fundamentals",
    duration: 420, // 7 minutes
    color: "bg-blue-500",
    description: "Test your understanding of Extended Reality basics",
    questions: [
      {
        question: "What does XR stand for and what does it encompass?",
        options: [
          "eXtreme Reality - only gaming applications",
          "Extended Reality - umbrella term for VR, AR, and MR",
          "eXperimental Reality - prototype technologies",
          "eXternal Reality - cloud-based experiences"
        ],
        correct: 1
      },
      {
        question: "What is the key characteristic of Virtual Reality (VR)?",
        options: [
          "Digital overlay on the real world",
          "Physical and digital objects interact",
          "Fully immersive digital environment with complete isolation from reality",
          "Augmented information display"
        ],
        correct: 2
      },
      {
        question: "Which of these is the best example of Augmented Reality (AR)?",
        options: [
          "Playing a game in Oculus VR headset",
          "Using Instagram filters or Pokemon GO",
          "Microsoft HoloLens holographic interactions",
          "Watching a 360-degree video"
        ],
        correct: 1
      },
      {
        question: "What distinguishes Mixed Reality (MR) from Augmented Reality (AR)?",
        options: [
          "MR uses only smartphones, AR uses headsets",
          "MR is cheaper than AR technology",
          "In MR, physical and digital objects can interact in real-time, while AR just overlays",
          "MR works only indoors, AR works anywhere"
        ],
        correct: 2
      },
      {
        question: "Which platforms are leading in Mixed Reality development?",
        options: [
          "PlayStation VR and Oculus Quest",
          "iPhone and Android phones",
          "Microsoft HoloLens and Magic Leap",
          "Google Cardboard and Samsung Gear"
        ],
        correct: 2
      },
      {
        question: "XR technologies are being used across various industries. Which industry application is correctly matched?",
        options: [
          "Education: Only for gaming and entertainment",
          "Healthcare: Virtual try-ons and product visualization",
          "Manufacturing: Assembly instructions and maintenance guidance",
          "Retail: Surgical planning and medical training"
        ],
        correct: 2
      },
      {
        question: "Which statement best describes the XR spectrum?",
        options: [
          "VR, AR, and MR are completely separate technologies",
          "XR represents a spectrum of experiences blending physical and digital worlds",
          "XR only includes gaming applications",
          "XR is limited to smartphone applications"
        ],
        correct: 1
      },
      {
        question: "What makes VR different from other XR technologies?",
        options: [
          "VR enhances the real world with digital overlays",
          "VR allows physical and digital interaction",
          "VR creates 360-degree environments with complete isolation from reality",
          "VR only works with smartphones"
        ],
        correct: 2
      }
    ]
  },
  ar: {
    title: "AR Development",
    duration: 540, // 9 minutes
    color: "bg-green-500",
    description: "Dive deep into Augmented Reality technology and applications",
    questions: [
      {
        question: "What are the four key components that make AR systems work?",
        options: [
          "Internet, GPS, Bluetooth, Display",
          "Camera, Sensors, Processing, Display",
          "Battery, Memory, CPU, Graphics",
          "Microphone, Speaker, Camera, Touch"
        ],
        correct: 1
      },
      {
        question: "What is SLAM technology in AR?",
        options: [
          "Super Light Augmented Mapping",
          "Smart Location and Movement",
          "Simultaneous Localization and Mapping",
          "Sensor-based Light Adjustment Method"
        ],
        correct: 2
      },
      {
        question: "What's the difference between marker-based and markerless AR?",
        options: [
          "Marker-based is newer technology",
          "Markerless requires QR codes, marker-based doesn't",
          "Marker-based relies on specific images/QR codes, markerless uses environment mapping",
          "There's no real difference between them"
        ],
        correct: 2
      },
      {
        question: "Which AR hardware platform offers the widest reach today?",
        options: [
          "Microsoft HoloLens",
          "Magic Leap headsets",
          "Smartphones and tablets",
          "Web AR browsers"
        ],
        correct: 2
      },
      {
        question: "What frame rate must AR systems maintain to preserve the illusion?",
        options: [
          "15+ frames per second",
          "30+ frames per second",
          "60+ frames per second",
          "120+ frames per second"
        ],
        correct: 1
      },
      {
        question: "Which industry use case represents the best application of AR's 'contextual information' strength?",
        options: [
          "Entertainment gaming experiences",
          "Social media photo filters",
          "Manufacturing assembly instructions and maintenance guidance",
          "Virtual reality training simulations"
        ],
        correct: 2
      },
      {
        question: "What enables modern smartphones to perform markerless AR?",
        options: [
          "Special AR cameras only",
          "ARKit (Apple) and ARCore (Google) frameworks",
          "External marker placement",
          "Internet connection requirements"
        ],
        correct: 1
      },
      {
        question: "How do AR systems track device position and understand environment in real-time?",
        options: [
          "Using only GPS positioning",
          "Through SLAM technology creating 3D maps while tracking position",
          "Only through internet-based location services",
          "Using pre-installed room mapping"
        ],
        correct: 1
      },
      {
        question: "What is the main advantage of Web AR?",
        options: [
          "Better performance than native apps",
          "AR experiences directly in web browsers without downloading apps",
          "Only works with specific devices",
          "Requires special hardware installation"
        ],
        correct: 1
      }
    ]
  },
  unity: {
    title: "Unity AR Development",
    duration: 540, // 9 minutes
    color: "bg-purple-500",
    description: "Master Unity's AR Foundation and development workflow",
    questions: [
      {
        question: "What are the main advantages of using Unity for AR development?",
        options: [
          "Only works with iOS devices",
          "Cross-platform development and robust AR Foundation",
          "Requires extensive platform-specific coding",
          "Limited to 2D applications only"
        ],
        correct: 1
      },
      {
        question: "What does Unity's AR Foundation provide?",
        options: [
          "Individual APIs for each platform",
          "A unified API that works across ARKit, ARCore, and other AR platforms",
          "Only marker-based AR tracking",
          "Web-only AR experiences"
        ],
        correct: 1
      },
      {
        question: "In Unity's AR Foundation architecture, what does the AR Session manage?",
        options: [
          "Only the camera feed",
          "User interface elements",
          "The overall AR experience lifecycle",
          "Network connections only"
        ],
        correct: 2
      },
      {
        question: "What replaces the regular camera in Unity AR projects?",
        options: [
          "AR Session",
          "AR Camera",
          "AR Manager",
          "AR Foundation"
        ],
        correct: 1
      },
      {
        question: "What is the purpose of AR Plane Manager in Unity?",
        options: [
          "Manages user interface planes",
          "Controls camera movement",
          "Detects environmental features like surfaces for tracking",
          "Handles network communication"
        ],
        correct: 2
      },
      {
        question: "Which packages are essential when setting up an AR project in Unity?",
        options: [
          "Only Unity's standard packages",
          "AR Foundation and platform-specific package (ARKit/ARCore)",
          "Web development packages only",
          "Audio and video packages"
        ],
        correct: 1
      },
      {
        question: "What is the core AR development pattern demonstrated in the plane detection demo?",
        options: [
          "Audio recognition → Voice commands → Response",
          "Image recognition → Marker tracking → Display",
          "Environment understanding → User interaction → Persistent object placement",
          "Network connection → Data download → Display"
        ],
        correct: 2
      },
      {
        question: "What makes Unity's AR Foundation architecture modular?",
        options: [
          "Everything must be included in every project",
          "You can only include what you need, keeping apps lean and focused",
          "It only works with specific device types",
          "All features are permanently enabled"
        ],
        correct: 1
      },
      {
        question: "What should you do after importing AR Foundation in Unity?",
        options: [
          "Nothing else is required",
          "Configure XR settings and add AR Session and AR Session Origin to scene",
          "Only change camera settings",
          "Install additional graphics packages"
        ],
        correct: 1
      },
      {
        question: "How does Unity's cross-platform AR development work?",
        options: [
          "Separate code needed for each platform",
          "Write once, deploy everywhere with platform-specific handling",
          "Only works on one platform at a time",
          "Requires different Unity versions for each platform"
        ],
        correct: 1
      }
    ]
  }
};

export default QuizData;