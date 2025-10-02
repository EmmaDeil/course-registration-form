# Course Registration Form

A React-based course registration form built with Vite, featuring comprehensive form validation and professional styling.

## 🎯 Project Overview

This project implements a complete course registration system with form validation, error handling, and a responsive design. Students can register for various online courses with validation to ensure data integrity.

## ✨ Features

- **Complete Form Validation**: Required fields, email format, and age verification (18+)
- **Real-time Error Messages**: Immediate feedback with clear error indicators
- **Success Confirmation**: Visual confirmation upon successful registration
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Professional Styling**: Modern gradient design with smooth animations
- **Course Selection**: Multiple course options available for registration

## 🛠️ Technologies Used

- **React** - Frontend framework with hooks (useState)
- **Vite** - Fast build tool and development server
- **CSS3** - Advanced styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript features

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd course-registration-form
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Form Fields

- **First Name** (Required)
- **Last Name** (Required)
- **Email** (Required, valid email format)
- **Age** (Required, must be 18 or older)
- **Course Selection** (Required dropdown with 5 course options)

## 🔧 Validation Rules

- All fields are required
- Email must be in valid format (user@domain.com)
- Age must be 18 or older
- Course must be selected from the dropdown

## 🎨 Design Features

- Gradient background with professional color scheme
- Form with rounded corners and shadow effects
- Error messages in red with visual indicators
- Success messages in green with confirmation
- Hover effects and smooth transitions
- Mobile-responsive design

## 🧠 What I Learned

Through building this course registration form, I gained hands-on experience with:

- **React Hooks**: Effective use of useState for managing form state and validation
- **Form Validation**: Implementing comprehensive client-side validation with real-time feedback
- **User Experience**: Creating intuitive error handling and success confirmation flows

This project strengthened my understanding of React fundamentals and modern web development practices.

## 📁 Project Structure

```
course-registration-form/
├── src/
│   ├── RegistrationForm.jsx    # Main form component
│   ├── App.jsx                 # App layout and structure
│   ├── App.css                 # Component-specific styles
│   ├── index.css               # Global styles
│   └── main.jsx               # Entry point
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🎯 Future Enhancements

- Backend integration for data persistence
- Email verification system
- Payment processing for course enrollment
- User dashboard for course management
- Multi-step registration wizard

---

Built with ❤️ using React and Vite
