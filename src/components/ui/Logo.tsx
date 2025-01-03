import { Brain } from 'lucide-react';
import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Brain className="h-8 w-8 text-accent-cyan" />
      <span className="text-xl font-bold bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">
        Sutra Smart
      </span>
    </div>
  );
}