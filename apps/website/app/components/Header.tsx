"use client";

import { useState } from "react";
import { Display, Body, Button, Icon } from "@build-stack/md3-tailwind";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900 leading-none">MD3 Tailwind</span>
                <span className="text-xs text-slate-500 leading-none">v0.1.0</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/docs" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Docs
            </a>
            <a href="/components" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Components
            </a>
            <a href="/blocks" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Blocks
            </a>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-slate-600 hover:text-slate-900 transition-colors font-medium">
                <span>Resources</span>
                <Icon name="keyboard_arrow_down" size={20} className="transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="/github" className="flex items-center px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50">
                    <Icon name="code" size={20} className="mr-3" />
                    GitHub
                  </a>
                  <a href="/changelog" className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50">
                    Changelog
                  </a>
                  <a href="/roadmap" className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50">
                    Roadmap
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* GitHub Stars */}
            <a 
              href="https://github.com/build-stack/md3-tailwind" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
            >
              <Icon name="star" size={20} family="outlined" />
              <span>Star</span>
            </a>

            {/* Get Started Button */}
            <Button variant="filled" size="sm" className="hidden md:inline-flex">
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "close" : "menu"} 
                size={24} 
                className={`transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="/docs" className="text-slate-600 hover:text-slate-900 transition-colors font-medium py-2">
                Docs
              </a>
              <a href="/components" className="text-slate-600 hover:text-slate-900 transition-colors font-medium py-2">
                Components
              </a>
              <a href="/examples" className="text-slate-600 hover:text-slate-900 transition-colors font-medium py-2">
                Examples
              </a>
              <a href="/github" className="text-slate-600 hover:text-slate-900 transition-colors font-medium py-2">
                GitHub
              </a>
              <div className="pt-4 border-t border-slate-200">
                <Button variant="filled" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
