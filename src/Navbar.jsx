// import React from "react";
import { Wallet } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-md w-full">
      <div className="flex justify-between items-center h-16 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="p-3 bg-teal-600 text-white rounded-lg flex items-center justify-center">
            <Wallet className="w-6 h-6" />
          </div>
          <span className="font-bold text-2xl text-gray-800 px-2">Walled</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-gray-600">
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/transfer" end>
            Transfer
          </NavLink>
          <NavLink to="/topup" end>
            TopUp
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
