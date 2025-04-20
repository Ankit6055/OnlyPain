import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "home", label: "Home" },
  { href: "explore", label: "Explore" },
  // { href: "categories", label: "Categories" },
  { href: "testimonials", label: "Testimonials" },
  { href: "team", label: "Team" },
  { href: "about", label: "About" },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const painColor = "#00aff0";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-black text-white py-4 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <h1 className="text-2xl font-bold">
            Only
            <span style={{ color: painColor }}>Pain</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={() => setActiveTab(item.href)}
              className="hover:text-gray-300"
              style={activeTab === item.href ? { color: painColor } : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Search */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search pain..."
            className="bg-gray-800 text-white rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={() => {
                setActiveTab(item.href);
                closeMenu();
              }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300"
              style={activeTab === item.href ? { color: painColor } : undefined}
            >
              {item.label}
            </a>
          ))}

          <div className="mt-3 px-3">
            <input
              type="text"
              placeholder="Search pain..."
              className="w-full bg-gray-800 text-white rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </header>
  );
}
