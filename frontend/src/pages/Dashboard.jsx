import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome to Home Automation Dashboard</h1>
      <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-md">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
