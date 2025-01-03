import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';
import { CodeError } from '../../types';
import { Card } from '../ui/Card';
import { ErrorList } from './ErrorList';

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
      <ErrorList errors={errors} />
    </div>
  );
}