# 🕉️ Ayurvedic Prakriti Self-Assessment

A modern, interactive web application built with React and Tailwind CSS to help users discover their Ayurvedic body constitution (Prakriti) by assessing physical, mental, emotional, and lifestyle traits.

![Prakriti Assessment](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.2-38B2AC)
![Vite](https://img.shields.io/badge/Vite-4.3.9-646CFF)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## 🌟 About

This application helps users identify their dominant dosha (Vata, Pitta, or Kapha) through a comprehensive self-assessment questionnaire. Based on ancient Ayurvedic principles, the app provides personalized insights about body constitution, characteristics, and lifestyle recommendations.

### What is Prakriti?

Prakriti is your unique body-mind constitution in Ayurveda, determined by the balance of three doshas:
- **Vata** (Air + Space): Movement, creativity, quick thinking
- **Pitta** (Fire + Water): Transformation, metabolism, intensity
- **Kapha** (Earth + Water): Structure, stability, calmness

## ✨ Features

- ✅ **Comprehensive Assessment** - 12 questions across 4 categories
- ✅ **Interactive UI** - Beautiful, responsive design with smooth animations
- ✅ **Real-time Feedback** - Visual selection indicators with checkmarks
- ✅ **Detailed Results** - Animated progress bars showing dosha percentages
- ✅ **Personalized Insights** - Characteristics and balancing tips for your dominant dosha
- ✅ **Mobile Responsive** - Optimized for all device sizes
- ✅ **Fast & Modern** - Built with Vite for lightning-fast performance

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.2.0
- **Styling:** Tailwind CSS 3.3.2
- **Icons:** Lucide React 0.263.1
- **Build Tool:** Vite 4.3.9
- **Language:** JavaScript (JSX)

## 📸 Screenshots

### Desktop View
![Desktop View](https://github.com/user-attachments/assets/0a4f8901-79f8-4ec8-99bb-89c551d7c635)

### Mobile View
<img src="https://github.com/user-attachments/assets/1b1d94b1-ca42-4d67-a9d6-6bb37f64773e" width="320" alt="Mobile View" />

### Results Page
<img src="https://github.com/user-attachments/assets/2c61205d-775c-40f9-b24e-f513150f6436" width="900" alt="Results Page" />


## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

### Step-by-Step Setup

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/prakriti-assessment.git
   cd prakriti-assessment
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start the development server**
```bash
   npm run dev
```

4. **Open in browser**
   - Navigate to `http://localhost:5173/`
   - The app will automatically reload when you make changes

## 💻 Usage

### Running Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts development server at localhost:5173 |
| `npm run build` | Creates optimized production build |
| `npm run preview` | Preview production build locally |

### Testing on Mobile Device

1. Start the dev server with host flag:
```bash
   npm run dev -- --host
```

2. Note the Network URL (e.g., `http://192.168.x.x:5173/`)

3. Open this URL on your mobile device (must be on same WiFi)

## 📁 Project Structure
```
prakriti-app/
├── public/                 # Static assets
├── src/
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles with Tailwind
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # Project documentation
```

## 🎯 How It Works

1. **Assessment Questions**: Users answer 12 questions across 4 categories:
   - Physical Traits (skin, body, hair, eyes)
   - Mental & Emotional Traits (mindset, memory, emotions)
   - Daily Habits (diet, sleep, energy)
   - Environmental Reactions (weather, stress response)

2. **Calculation**: Each answer corresponds to a dosha type. The app calculates percentages based on responses.

3. **Results**: Users see:
   - Visual progress bars for each dosha
   - Dominant dosha identification
   - Personalized characteristics
   - Lifestyle balancing tips


## 👨‍💻 Author

**Your Name**
- GitHub: [@SujalPatel17](https://github.com/SujalPatel17)
- LinkedIn: [Sujal Patel](https://www.linkedin.com/in/sujalpatelll/)
- Email: patelsujal7624@gmail.com

## 🙏 Acknowledgments

- Ayurvedic principles and dosha characteristics
- React and Tailwind CSS communities
- Lucide for beautiful icons
- Vite for amazing developer experience


---

Made with ❤️ and ☕ using React and Tailwind CSS
