import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ikonokhoz: npm install lucide-react

export default function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) =>
        location.pathname === path
            ? "text-button font-medium nav-link-active"
            : "nav-link";

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#F7A38D] border-b border-white/30 z-50 rounded-b-3xl shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <Link
                    to="/"
                    className="font-serif text-xl sm:text-2xl font-bold text-white hover:opacity-90 transition-all"
                >
                    Angol Nyelvgyakorlás Online
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-8 text-lg flex items-center">
                    <Link to="/" className={isActive("/")}>
                        Kezdőlap
                    </Link>
                    <Link to="/about" className={isActive("/about")}>
                        Rólam
                    </Link>
                    <Link to="/services" className={isActive("/services")}>
                        Szolgáltatások
                    </Link>
                    <Link to="/blog" className={isActive("/blog")}>
                        Cikkek
                    </Link>
                    <a
                        href="https://app.minup.io/book/lekrinszkine-toth-eva"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-[#F4A38D] font-semibold border-t-2 border-white/30 bg-[#FDF3E7] px-3 py-1 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-md"
                    >
                        Jelentkezz
                    </a>
                </div>

                {/* Hamburger (mobile only) */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div
                    className="md:hidden absolute top-full left-0 w-full bg-[#FBE9E1] text-[#2b2b2b] border-t border-[#f7c7b2] shadow-lg animate-fadeDown"
                >
                    <div className="flex flex-col items-center py-6 gap-4 text-lg">
                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className={isActive("/")}
                        >
                            Kezdőlap
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                            className={isActive("/about")}
                        >
                            Rólam
                        </Link>
                        <Link
                            to="/services"
                            onClick={() => setMenuOpen(false)}
                            className={isActive("/services")}
                        >
                            Szolgáltatások
                        </Link>
                        <Link
                            to="/blog"
                            onClick={() => setMenuOpen(false)}
                            className={isActive("/blog")}
                        >
                            Cikkek
                        </Link>
                        <a
                            href="https://app.minup.io/book/lekrinszkine-toth-eva"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-[#F4A38D] font-semibold border-t-2 border-white/30 bg-[#FDF3E7] px-3 py-1 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-md"
                        >
                            Jelentkezz
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
