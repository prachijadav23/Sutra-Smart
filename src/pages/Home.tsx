import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import { Logo } from '../components/ui/Logo';
import { Button } from '../components/ui/Button';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight-900 to-navy-900">
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Logo />
            <div className="flex gap-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-100 mb-6">
              Smart Code Analysis for
              <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">
                {' '}Every Developer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get instant feedback on your code with intelligent analysis and suggestions
              across multiple programming languages.
            </p>
            <Link to="/signup">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-navy-800 p-6 rounded-lg border border-gray-800">
              <Code className="h-10 w-10 text-accent-cyan mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Multi-Language Support
              </h3>
              <p className="text-gray-300">
                Analyze code in Python, JavaScript, TypeScript, Java, C++, and more.
              </p>
            </div>
            <div className="bg-navy-800 p-6 rounded-lg border border-gray-800">
              <Zap className="h-10 w-10 text-accent-cyan mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Real-Time Analysis
              </h3>
              <p className="text-gray-300">
                Get instant feedback as you type with intelligent suggestions.
              </p>
            </div>
            <div className="bg-navy-800 p-6 rounded-lg border border-gray-800">
              <Shield className="h-10 w-10 text-accent-cyan mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Best Practices
              </h3>
              <p className="text-gray-300">
                Learn from suggestions that follow industry standards.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}