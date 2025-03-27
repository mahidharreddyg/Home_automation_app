import React from "react";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
