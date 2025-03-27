import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignInForm = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md w-80">
      <input
        type="email"
        placeholder="Email"
        required
        className="w-full mb-2 p-2 border rounded"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        required
        className="w-full mb-4 p-2 border rounded"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
