import React from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Card } from '../ui/Card';
import { CodeAnalysis } from '../../types';

interface Props {
  analysis: CodeAnalysis;
}

export function CodeAnalysisResult({ analysis }: Props) {
  const { errors, suggestions, quality } = analysis;

  return (
    <div className="space-y-6">
      {/* Errors Section */}
      {errors.length > 0 && (
        <Card className="p-4 bg-red-900/20">
          <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2 mb-4">
            <AlertCircle size={20} />
            Errors Found ({errors.length})
          </h3>
          <ul className="space-y-2">
            {errors.map((error, index) => (
              <li key={index} className="text-red-300">
                Line {error.line}: {error.message}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Suggestions Section */}
      {suggestions.length > 0 && (
        <Card className="p-4 bg-blue-900/20">
          <h3 className="text-lg font-semibold text-blue-400 flex items-center gap-2 mb-4">
            <Info size={20} />
            Suggestions ({suggestions.length})
          </h3>
          <ul className="space-y-4">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-blue-300">
                <p>Line {suggestion.line}: {suggestion.message}</p>
                {suggestion.example && (
                  <pre className="mt-2 p-2 bg-gray-800 rounded-md text-sm">
                    {suggestion.example}
                  </pre>
                )}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Code Quality Score */}
      <Card className="p-4">
        <h3 className="text-lg font-semibold text-gray-100 flex items-center gap-2 mb-4">
          <CheckCircle size={20} className="text-green-400" />
          Code Quality Analysis
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-cyan">{quality.complexity}/10</div>
            <div className="text-sm text-gray-400">Complexity</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-cyan">{quality.maintainability}/10</div>
            <div className="text-sm text-gray-400">Maintainability</div>
          </div>
        </div>
        {quality.bestPractices.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Best Practices</h4>
            <ul className="list-disc list-inside text-sm text-gray-400">
              {quality.bestPractices.map((practice, index) => (
                <li key={index}>{practice}</li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </div>
  );
}