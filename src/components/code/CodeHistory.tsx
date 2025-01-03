import React from 'react';
import { History } from 'lucide-react';
import { Card } from '../ui/Card';
import { formatDistanceToNow } from '../../utils/dateUtils';

interface CodeHistoryProps {
  history: Array<{
    id: string;
    code: string;
    language: string;
    timestamp: Date;
  }>;
  onSelect: (code: string) => void;
}

export function CodeHistory({ history, onSelect }: CodeHistoryProps) {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-100 mb-4 flex items-center gap-2">
        <History size={20} className="text-accent-cyan" />
        Recent Submissions
      </h2>
      <Card>
        <ul className="divide-y divide-gray-700">
          {history.map((submission) => (
            <li
              key={submission.id}
              className="px-6 py-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => onSelect(submission.code)}
            >
              <div className="flex justify-between items-center">
                <div className="text-gray-300">
                  <span className="text-accent-cyan">{submission.language}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">
                    {formatDistanceToNow(submission.timestamp)}
                  </span>
                </div>
                <button
                  className="text-gray-400 hover:text-accent-cyan"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(submission.code);
                  }}
                >
                  Load
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}