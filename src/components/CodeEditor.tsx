import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';
import { CodeError } from '../types';
import { Card } from './ui/Card';

interface Props {
  code: string;
  onChange: (value: string) => void;
  errors: CodeError[];
}

export function CodeEditor({ code, onChange, errors }: Props) {
  return (
    <div className="space-y-4">
      <Card className="overflow-hidden border border-gray-700">
        <CodeMirror
          value={code}
          height="400px"
          theme={oneDark}
          extensions={[javascript()]}
          onChange={onChange}
          className="text-sm"
        />
      </Card>

      {errors.length > 0 && (
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
      )}
    </div>
  );
}
