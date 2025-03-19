import React, { useState } from "react";
import styles from "./event_organizer_signin.module.css";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from 'lucide-react';

export default function EventOrganizerSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const loginResponse = await fetch("http://localhost:5000/organizerLogin/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email: email, Password: password }),
      });

      const loginData = await loginResponse.json();

      if (!loginResponse.ok) {
        setError("Incorrect email or password");
        return;
      }

      const organizerResponse = await fetch("http://localhost:5000/organizerProfile2/getOrganizerByMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const organizerData = await organizerResponse.json();

      if (!organizerResponse.ok) {
        setError("Failed to fetch organizer details.");
        return;
      }

      localStorage.setItem('organizer', JSON.stringify({
        name: organizerData.FullName,
        city: organizerData.City,
        email: organizerData.Email,
        contactNumber: organizerData.ContactNumber,
      }));

      navigate("/Home");
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.formHeader}>
          <h1>Welcome Back!</h1>
          <p>Sign in to your Event Organizer account</p>
        </div>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">
              <Mail size={18} />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">
              <Lock size={18} />
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Sign in
          </button>
        </form>

        <p className={styles.registerLink}>
          Don't have an account?
          <span onClick={() => navigate('/organizer_login')}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}