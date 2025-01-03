import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100">About</h3>
            <p className="text-gray-400">
              Sutra Smart provides intelligent code analysis and suggestions to help developers write better code.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-accent-cyan">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-accent-cyan">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/docs" className="text-gray-400 hover:text-accent-cyan">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent-cyan">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-cyan">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-cyan">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-cyan">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sutra Smart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}