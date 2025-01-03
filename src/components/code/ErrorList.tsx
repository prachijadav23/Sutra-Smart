import React from 'react';
import { CodeError } from '../../types';
import { Card } from '../ui/Card';

interface ErrorListProps {
  errors: CodeError[];
}

export function ErrorList({ errors }: ErrorListProps) {
  if (errors.length === 0) return null;

  return (
    <Card className="bg-red-900/20 p-4">
      <h3 className="text-red-400 font-semibold mb-2">Errors Found:</h3>
      <ul className="space-y-2">
        {errors.map((error, index) => (
          <li key={index} className="text-red-300">
            <span className="font-mono">
              Line {error.line}:{error.column}
            </span>{' '}
            - {error.message}
            {error.suggestion && (
              <p className="text-green-400 mt-1 ml-4">
                Suggestion: {error.suggestion}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}