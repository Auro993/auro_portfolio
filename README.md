````markdown
# Aurosmita Sahoo - Portfolio

A modern, responsive portfolio website showcasing my work as a Full Stack Developer & AI Enthusiast.

![Portfolio Screenshot](https://portfolio-9xcckb4tv-aurosmitasahoo4-9425s-projects.vercel.app)

## 🌐 Live Demo

**Live Portfolio:**  
https://portfolio-9xcckb4tv-aurosmitasahoo4-9425s-projects.vercel.app

---

## ✨ Features

- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive across all devices
- 💻 Interactive terminal with typewriter effect
- 🚀 Project showcase with live demos and source code
- 📜 Scrollable certificates section
- 📧 Contact form powered by EmailJS
- 🎯 Organized skills section
- 📚 Education timeline
- 🌟 Animated 3D geometric background
- ⚡ Smooth animations using Framer Motion

---

# 🛠️ Tech Stack

## Frontend
- React 19
- Framer Motion
- React Icons
- React Scroll
- React Simple Typewriter

## Styling
- Custom CSS
- CSS Variables
- Responsive Design

## Backend / Integration
- EmailJS
- Vercel

## Development Tools
- Git
- GitHub
- VS Code
- Create React App

---

# 📁 Project Structure

```text
portfolio/
├── public/
│   ├── assets/
│   │   ├── projects/
│   │   ├── *.jpeg
│   │   └── auro_photo.jpeg
│   ├── eduBlue.svg
│   ├── index.html
│   └── manifest.json
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Skills/
│   │   │   ├── Education/
│   │   │   ├── Projects/
│   │   │   ├── Certificates/
│   │   │   └── Contact/
│   │   └── ui/
│   │
│   ├── data/
│   │   └── portfolioData.js
│   ├── hooks/
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.js
│   └── index.js
│
├── .gitignore
├── package.json
├── README.md
└── vercel.json
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

## Installation

```bash
# Clone the repository
git clone https://github.com/Auro993/auro_portfolio.git

# Navigate to project folder
cd auro_portfolio

# Install dependencies
npm install

# Start development server
npm start
```

## Production Build

```bash
npm run build
```

---

# 📝 Customization

## Update Personal Information

Edit:

```text
src/data/portfolioData.js
```

Example:

```javascript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  college: "Your College",
  location: "Your Location",
};
```

---

## Add Projects

```javascript
{
  id: 4,
  title: "Project Name",
  description: "Project description",
  tech: ["Tech1", "Tech2"],
  github: "https://github.com/yourusername/project",
  demo: "https://project-demo.com",
  status: "Live",
  category: "Full Stack"
}
```

---

## Add Certificates

```javascript
{
  id: 7,
  name: "Certificate Name",
  issuer: "Issuing Organization",
  image: "/assets/certificate.jpg"
}
```

---

# 📧 Contact Form Setup

1. Create an EmailJS account.
2. Create a service.
3. Create an email template.
4. Update the credentials in `Contact.jsx`.

```javascript
const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const PUBLIC_KEY = "your_public_key";
```

---

# 🚀 Deployment

## Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## Deploy to Netlify

```bash
npm run build
```

Upload the generated **build** folder to Netlify.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 📞 Connect with Me

- **GitHub:** https://github.com/Auro993
- **LinkedIn:** Aurosmita Sahoo
- **LeetCode:** aurosmitasahoo
- **Email:** aurosmitsahoo4@gmail.com

---

# 🙏 Acknowledgments

- React Icons
- Framer Motion
- EmailJS
- Vercel

Built with ❤️ using React.

---

# 📝 How to Add README

## Step 1

Create a file named:

```text
README.md
```

in your project root.

---

## Step 2

Copy and paste this entire README into the file.

---

## Step 3

Push it to GitHub.

```bash
git add README.md
git commit -m "Add README.md"
git push origin main
```

---

# ✅ README Includes

| Section | Description |
|---------|-------------|
| Live Demo | Portfolio deployment link |
| Features | Portfolio highlights |
| Tech Stack | Technologies used |
| Project Structure | Folder organization |
| Getting Started | Installation guide |
| Customization | How to update content |
| Deployment | Vercel & Netlify deployment |
| Contact | Social links and email |

---

⭐ Your portfolio now has a professional README!
````
