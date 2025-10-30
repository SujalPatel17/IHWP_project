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
![Desktop View](screenshots/desktop.png)

### Mobile View
![Mobile View](screenshots/mobile.png)

### Results Page
![Results](screenshots/results.png)

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

## 🎨 Customization

### Changing Colors

Edit `src/App.jsx` to modify dosha colors:
```javascript
const doshaInfo = {
  vata: {
    color: "purple-600",  // Change this
    bgColor: "purple-100",
    // ...
  }
}
```

### Adding New Questions

Add to the `questions` array in `src/App.jsx`:
```javascript
{
  id: "newQuestion",
  label: "Your Question:",
  options: [
    { value: "vata", text: "Option 1" },
    { value: "pitta", text: "Option 2" },
    { value: "kapha", text: "Option 3" }
  ]
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow existing code style
- Write clear commit messages
- Add comments for complex logic
- Test on both desktop and mobile
- Update README if needed

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Device/browser information

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Ayurvedic principles and dosha characteristics
- React and Tailwind CSS communities
- Lucide for beautiful icons
- Vite for amazing developer experience

## 📞 Support

For support, email your.email@example.com or open an issue in the repository.

## 🔮 Future Enhancements

- [ ] Add dual-dosha and tri-dosha results
- [ ] Include detailed meal plans for each dosha
- [ ] Add yoga and exercise recommendations
- [ ] Multi-language support
- [ ] Save and share results feature
- [ ] Dark mode toggle
- [ ] Export results as PDF

---

Made with ❤️ and ☕ using React and Tailwind CSS

**⭐ Star this repo if you find it helpful!**
```

## 📝 Additional Files to Create:

### 1. Create `LICENSE` file (MIT License):
```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### 2. Create `.gitignore` file:
```
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production
/build
/dist

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor
.vscode/
.idea/
*.swp
*.swo
*~

# OS
Thumbs.db
