import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CodeEditor } from '../components/code/CodeEditor';
import { CodeHistory } from '../components/code/CodeHistory';
import { CodeAnalysisResult } from '../components/code/CodeAnalysisResult';
import { useCodeHistory } from '../hooks/useCodeHistory';
import { LanguageSelector } from '../components/LanguageSelector';
import { useAuthStore } from '../store/authStore';
import { analyzeCode } from '../services/codeAnalysisService';

export function Dashboard() {
  const [code, setCode] = useState('// Write your code here');
  const [language, setLanguage] = useState('javascript');
  const [analysis, setAnalysis] = useState(null);
  const { history, addSubmission } = useCodeHistory();
  const user = useAuthStore((state) => state.user);

  const handleAnalyze = () => {
    const result = analyzeCode(code, language);
    setAnalysis(result);
    addSubmission(code, language);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-100">Code Editor</h1>
        <div className="flex items-center gap-4">
          <LanguageSelector selected={language} onSelect={setLanguage} />
          <Button onClick={handleAnalyze} className="flex items-center gap-2">
            <Code2 size={20} />
            Analyze Code
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="p-4">
            <CodeEditor code={code} onChange={setCode} errors={analysis?.errors || []} />
          </Card>
          <CodeHistory history={history} onSelect={setCode} />
        </div>

        <div className="space-y-6">
          {analysis && <CodeAnalysisResult analysis={analysis} />}
        </div>
      </div>
    </div>
  );
}