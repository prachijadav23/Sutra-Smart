import { useState, useCallback } from 'react';

interface CodeSubmission {
  id: string;
  code: string;
  language: string;
  timestamp: Date;
}

export function useCodeHistory() {
  const [history, setHistory] = useState<CodeSubmission[]>([]);

  const addSubmission = useCallback((code: string, language: string) => {
    const submission: CodeSubmission = {
      id: Math.random().toString(36).substr(2, 9),
      code,
      language,
      timestamp: new Date(),
    };

    setHistory(prev => {
      const newHistory = [submission, ...prev].slice(0, 3); // Keep only last 3 submissions
      return newHistory;
    });
  }, []);

  return { history, addSubmission };
}