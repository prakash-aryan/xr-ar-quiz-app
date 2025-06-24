# XR & AR Development Quiz App

A comprehensive interactive assessment platform for Extended Reality (XR), Augmented Reality (AR), and Unity development. This application provides engaging quizzes to test knowledge of XR fundamentals, AR development concepts, and Unity AR Foundation implementation.

## 🚀 Features

- **Three Comprehensive Quiz Modules**:
  - XR Fundamentals (8 questions, 7 minutes)
  - AR Development (9 questions, 9 minutes)
  - Unity AR Development (10 questions, 9 minutes)

- **Enhanced User Experience**:
  - Mobile-responsive design with modern UI
  - Real-time countdown timer with visual warnings
  - Large, prominent question numbers for better visibility
  - Smooth animations and transitions
  - Progress tracking with visual indicators

- **Instant Assessment**:
  - Immediate scoring and feedback
  - Detailed answer review with explanations
  - Performance analytics and recommendations
  - Unlimited retake attempts

- **Accessibility Features**:
  - Keyboard navigation support
  - High contrast mode compatibility
  - Screen reader friendly
  - Reduced motion support

## 🛠️ Technologies Used

- **Frontend**: React 18.2.0
- **UI Framework**: Chakra UI 2.8.2
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Styling**: CSS3 with modern features
- **Build Tool**: Create React App

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (version 6 or higher)

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd xr-ar-quiz-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

## 🎯 Quiz Access

Quizzes are accessed through specific URL parameters for controlled access:

| Quiz Module | URL |
|-------------|-----|
| XR Fundamentals | `https://xr-ar-quiz-app.pages.dev/?quiz=xr` |
| AR Development | `https://xr-ar-quiz-app.pages.dev/?quiz=ar` |
| Unity AR Development | `https://xr-ar-quiz-app.pages.dev/?quiz=unity` |

> **Note**: The homepage serves as a landing page only. Quizzes are not directly accessible from the homepage and require the specific URLs above.

## 📁 Project Structure

```
xr-ar-quiz-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── HomePage.js          # Landing page component
│   │   ├── QuizPage.js          # Quiz interface component
│   │   └── ResultsPage.js       # Results and review component
│   ├── data/
│   │   └── QuizData.js          # Quiz questions and configuration
│   ├── App.js                   # Main application component
│   ├── App.css                  # Application-specific styles
│   ├── index.js                 # Application entry point
│   ├── index.css                # Global styles
│   └── reportWebVitals.js       # Performance monitoring
├── package.json
└── README.md
```

## 🎨 Customization

### Adding New Quizzes

1. **Update QuizData.js**: Add new quiz object with the following structure:
```javascript
newQuiz: {
  title: "Quiz Title",
  duration: 600, // seconds
  color: "bg-color-class",
  description: "Quiz description",
  questions: [
    {
      question: "Question text",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: 1 // Index of correct answer (0-based)
    }
    // ... more questions
  ]
}
```

2. **Update App.js**: Add the new quiz key to the URL parameter handling

### Modifying Styles

- **Global styles**: Edit `src/index.css`
- **Component styles**: Edit `src/App.css`
- **Chakra UI theme**: Modify theme in `src/index.js`

### Changing Quiz Access URLs

Modify the URL parameter handling in `App.js`:
```javascript
const urlParams = new URLSearchParams(window.location.search);
const quizParam = urlParams.get('quiz'); // Change 'quiz' to your preferred parameter
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

Key mobile optimizations:
- Touch-friendly button sizes (minimum 44px)
- Responsive typography
- Optimized layouts for smaller screens
- Swipe-friendly interfaces

## 🎓 Educational Context

This quiz application is based on the workshop presentation "Introduction to Extended Reality (XR) and Building AR Applications with Unity" from the Digital Horizon workshop series. The content covers:

- **XR Fundamentals**: Basic concepts, terminology, and industry applications
- **AR Development**: Technical implementation, SLAM technology, and platform considerations
- **Unity AR Foundation**: Cross-platform development, session management, and best practices

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
| `npm run eject` | Ejects from Create React App (one-way operation) |

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🐛 Troubleshooting

### Common Issues

1. **Port 3000 already in use**:
   ```bash
   npx kill-port 3000
   npm start
   ```

2. **Node modules issues**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**:
   ```bash
   npm run build
   # Check console for specific error messages
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow React functional component patterns
- Use Chakra UI components for consistency
- Maintain mobile-first responsive design
- Add proper accessibility attributes
- Test on multiple screen sizes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Prakash Aryan**
- Workshop: "Introduction to Extended Reality (XR) and Building AR Applications with Unity"
- Digital Horizon Workshop Series
- June 24, 2025

## 🙏 Acknowledgments

- Digital Horizon Workshop organizers
- React and Chakra UI communities
