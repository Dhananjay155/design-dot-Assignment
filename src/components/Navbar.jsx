"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "@deemlol/next-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div className="border-b">
      <div className="flex justify-between items-center px-6">
        {/* Logo */}
        <img src="/images/logo.png" alt="logo" className="w-16 rounded-lg" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          <span className="cursor-pointer hover:text-blue-600">
            WHO WE SERVE
          </span>
          <span className="cursor-pointer hover:text-blue-600">SOLUTIONS</span>
          <span className="cursor-pointer hover:text-blue-600">RESOURCES</span>
          <span className="cursor-pointer hover:text-blue-600">ABOUT US</span>
          <span className="cursor-pointer hover:text-blue-600">CONTACT US</span>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4 text-sm font-semibold relative">
          {/* Country Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCountryOpen(!countryOpen)}
              className="flex items-center gap-1"
            >
              IND <ChevronDown />
            </button>
            {countryOpen && (
              <div className="absolute top-8 bg-white shadow-md p-2">
                <p className="cursor-pointer hover:text-blue-600">IND</p>
                <p className="cursor-pointer hover:text-blue-600">USA</p>
                <p className="cursor-pointer hover:text-blue-600">UK</p>
              </div>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1"
            >
              ENGLISH <ChevronDown />
            </button>
            {langOpen && (
              <div className="absolute top-8 bg-white shadow-md p-2">
                <p className="cursor-pointer hover:text-blue-600">English</p>
                <p className="cursor-pointer hover:text-blue-600">Hindi</p>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm font-semibold">
          <span>WHO WE SERVE</span>
          <span>SOLUTIONS</span>
          <span>RESOURCES</span>
          <span>ABOUT US</span>
          <span>CONTACT US</span>

          {/* Country */}
          <div>
            <p className="font-bold">Country</p>
            <p>IND</p>
            <p>USA</p>
            <p>UK</p>
          </div>

          {/* Language */}
          <div>
            <p className="font-bold">Language</p>
            <p>English</p>
            <p>Hindi</p>
          </div>
        </div>
      )}
    </div>
  );
}
