# 🚀 Aurosmita Sahoo Portfolio

A modern, responsive, and interactive developer portfolio built with **React**, showcasing my projects, technical skills, certifications, education, and experience as a **Full Stack Developer** and **AI Enthusiast**.

Designed with a clean UI, smooth animations, and a focus on user experience, this portfolio serves as my personal website and professional showcase.

---

## 🌐 Live Website

**🔗 Portfolio:**
https://portfolio-9xcckb4tv-aurosmitasahoo4-9425s-projects.vercel.app

---

## ✨ Highlights

* 🎨 Modern dark-themed UI with gradient effects
* 📱 Fully responsive across desktop, tablet, and mobile devices
* ⚡ Smooth animations powered by Framer Motion
* 💻 Interactive terminal section with typewriter animation
* 🚀 Featured projects with GitHub repositories and live demos
* 🏆 Dedicated certificates showcase
* 🎓 Education timeline
* 🛠️ Organized technical skills section
* 📬 Contact form integrated with EmailJS
* 🌌 Animated geometric background
* ♿ Clean and user-friendly navigation

---

# 🛠️ Tech Stack

### Frontend

* React 19
* Framer Motion
* React Icons
* React Scroll
* React Simple Typewriter

### Styling

* CSS3
* CSS Variables
* Responsive Design
* Flexbox & CSS Grid

### Backend & Services

* EmailJS
* Vercel

### Development Tools

* Git
* GitHub
* VS Code
* Create React App

---

# 📂 Project Structure

```text
portfolio/
│
├── public/
│   ├── assets/
│   │   ├── projects/
│   │   ├── certificates/
│   │   └── images/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   │
│   ├── data/
│   │   └── portfolioData.js
│   │
│   ├── hooks/
│   ├── styles/
│   ├── App.js
│   └── index.js
│
├── package.json
├── vercel.json
├── README.md
└── .gitignore
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

* Node.js (v14 or later)
* npm or Yarn

---

## Installation

Clone the repository

```bash
git clone https://github.com/Auro993/auro_portfolio.git
```

Navigate to the project

```bash
cd auro_portfolio
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm start
```

The application will run locally at:

```
http://localhost:3000
```

---

## Production Build

Create an optimized production build.

```bash
npm run build
```

---

# ⚙️ Customization

The portfolio is designed to be easily customizable.

### Personal Information

Update your details in:

```text
src/data/portfolioData.js
```

Example:

```javascript
export const portfolioData = {
  name: "Your Name",
  title: "Full Stack Developer",
  college: "Your College",
  location: "Your Location",
};
```

---

### Add New Projects

```javascript
{
  id: 1,
  title: "Project Name",
  description: "Project description",
  tech: ["React", "Node.js"],
  github: "https://github.com/username/project",
  demo: "https://project-demo.com",
  category: "Full Stack",
  status: "Live"
}
```

---

### Add Certificates

```javascript
{
  id: 1,
  name: "Certificate Name",
  issuer: "Organization",
  image: "/assets/certificate.jpg"
}
```

---

# 📧 EmailJS Configuration

To enable the contact form:

1. Create an EmailJS account.
2. Create an Email Service.
3. Create an Email Template.
4. Replace the credentials inside **Contact.jsx**.

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

---

## Deploy to Netlify

Generate the production build:

```bash
npm run build
```

Upload the generated **build/** folder to Netlify.

---

# 📬 Connect With Me

### GitHub

https://github.com/Auro993

### LinkedIn

Aurosmita Sahoo

### LeetCode

aurosmitasahoo

### Email

[aurosmitsahoo4@gmail.com](mailto:aurosmitsahoo4@gmail.com)

---

# 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

If you'd like to improve this portfolio:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

Feel free to use this project as inspiration for your own portfolio. If you do, a star ⭐ on the repository would be greatly appreciated.

---

## ⭐ Support

If you found this project useful or inspiring, please consider giving it a **Star** on GitHub.

It helps support my work and motivates me to build more open-source projects.

---

<div align="center">

### Built with ❤️ using React

**Thank you for visiting!**

</div>
