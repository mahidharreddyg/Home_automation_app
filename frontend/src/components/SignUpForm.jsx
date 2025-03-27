import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "", confirmPassword: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.confirmPassword) {
      alert("Sign-up successful! Please log in.");
      navigate("/");
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md w-80">
      <input type="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" required />
      <input type="password" placeholder="Password" className="w-full mb-2 p-2 border rounded" required />
      <input type="password" placeholder="Confirm Password" className="w-full mb-4 p-2 border rounded" required />
      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
