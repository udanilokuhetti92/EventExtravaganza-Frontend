import React, { useState } from "react";
import styles from "./event_planner_signin.module.css";
import { useNavigate } from "react-router-dom"; // For navigation

export default function EventPlannerSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/plannerLogin/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email: email, Password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        alert("Login successful!");
        navigate("/Home_PAGE"); // Redirect to the dashboard page
      } else {
        // Invalid credentials
        // setError(data.message || "Invalid email or password.");
        alert("Incorrect Password");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <h1 className={styles.h1}>Event Planner Sign In</h1> <br />
        <p className={styles.p1}>Provide correct information to sign in</p> <br />

        {error && <p className={styles.error}>{error}</p>} {/* Show error message */}

        <form onSubmit={handleSubmit}>
          <label className={styles.l1} htmlFor="email">Email</label> <br />
          <input
            className={styles.i1}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <br /> <br />

          <label className={styles.l1} htmlFor="password">Password</label> <br />
          <input
            className={styles.i1}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br />

          <button className={styles.b1} type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}
