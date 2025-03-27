import React from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../components/SignInForm";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Home Automation - Sign In</h1>
      <SignInForm />
      <p className="mt-4">
        Don't have an account?{" "}
        <button onClick={() => navigate("/signup")} className="text-blue-500 hover:underline">
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Home;
