import React from 'react';
import { Code2 } from 'lucide-react';

const SUPPORTED_LANGUAGES = [
  { id: 'javascript', name: 'JavaScript', extension: 'js' },
  { id: 'typescript', name: 'TypeScript', extension: 'ts' },
  { id: 'python', name: 'Python', extension: 'py' },
  { id: 'java', name: 'Java', extension: 'java' },
  { id: 'cpp', name: 'C++', extension: 'cpp' },
] as const;

interface Props {
  selected: string;
  onSelect: (language: string) => void;
}

export function LanguageSelector({ selected, onSelect }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Code2 className="text-accent-cyan" />
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="bg-navy-800 text-gray-100 border border-gray-700 rounded-md px-3 py-1.5"
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}