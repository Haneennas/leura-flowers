# 🌸 LEURA FLOWERS

A fresh blooms e-commerce frontend built with **React JS + Vite**.

---

## 📋 Abstract

Leura Flowers is a floral shop web application that allows users to browse flower products, learn about the shop, read customer reviews, and get in touch with the team. The application is fully responsive and works on both desktop and mobile devices.

---

## 🗂️ System Design

The application is a Single Page Application (SPA) built with React JS. Navigation between pages is handled using React state (no external router needed). Each page is a separate component rendered conditionally based on the current page state.

**Component Structure:**
```
App.jsx
├── Header.jsx       → Navigation bar
├── Home.jsx         → Landing/hero section
├── About.jsx        → About the shop + video
├── Products.jsx     → Product cards with prices
├── Review.jsx       → Customer testimonials
├── Contact.jsx      → Contact form + info
└── Footer.jsx       → Footer
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React JS 18 | Frontend framework |
| Vite | Build tool and dev server |
| CSS3 | Custom styling and responsive design |
| Font Awesome 5 | Icons |
| Git & GitHub | Version control and hosting |
| Vercel | Deployment |

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Haneennas/leura-flowers.git

# 2. Navigate to the project folder
cd leura-flowers

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 📄 Pages

- **Home** – Landing page with hero section and Shop Now button
- **About** – Shop story, video, and why choose us
- **Products** – Flower product cards with prices and discounts
- **Review** – Customer testimonials and star ratings
- **Contact** – Contact form and shop information

---

## 📸 Screenshots

### Home Page
![Home Page](screenshot_home.png)

### About Page
![About Page](screenshot_about.png)

### Products Page
![Products Page](screenshot_products.png)

### Contact Page
![Contact Page](screenshot_contact.png)

