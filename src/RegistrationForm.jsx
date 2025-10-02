import React, { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courseOptions = [
    { value: "", label: "Select a course" },
    { value: "web-development", label: "Web Development Fundamentals" },
    { value: "data-science", label: "Data Science & Analytics" },
    { value: "mobile-dev", label: "Mobile App Development" },
    { value: "cybersecurity", label: "Cybersecurity Essentials" },
    { value: "ai-ml", label: "Artificial Intelligence & Machine Learning" },
  ];

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Last Name validation
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Age validation
    if (!age.trim()) {
      newErrors.age = "Age is required";
    } else {
      const ageNum = parseInt(age);
      if (isNaN(ageNum) || ageNum < 18) {
        newErrors.age = "You must be 18 or older to register";
      }
    }

    // Course validation
    if (!course) {
      newErrors.course = "Please select a course";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      // Clear form after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setAge("");
      setCourse("");
      setErrors({});

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>Course Registration</h2>

      {isSubmitted && (
        <div className="success-message">
          Registration successful! Welcome to your selected course.
        </div>
      )}

      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={errors.firstName ? "error" : ""}
        />
        {errors.firstName && (
          <span className="error-message">{errors.firstName}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name *</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={errors.lastName ? "error" : ""}
        />
        {errors.lastName && (
          <span className="error-message">{errors.lastName}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="age">Age *</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={errors.age ? "error" : ""}
          min="1"
          max="120"
        />
        {errors.age && <span className="error-message">{errors.age}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="course">Course Selection *</label>
        <select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className={errors.course ? "error" : ""}
        >
          {courseOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.course && (
          <span className="error-message">{errors.course}</span>
        )}
      </div>

      <button type="submit" className="submit-button">
        Register for Course
      </button>
    </form>
  );
}

export default RegistrationForm;
