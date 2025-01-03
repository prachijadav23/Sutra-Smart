interface AnalysisResult {
    errors: Array<{
      line: number;
      column: number;
      message: string;
      severity: 'error' | 'warning';
      suggestion?: string;
    }>;
    alternatives?: Array<{
      description: string;
      code: string;
    }>;
  }
  
  const COMMON_PATTERNS = {
    javascript: {
      'console.log': {
        suggestion: 'Consider using a proper logging library for production code',
        alternative: 'import debug from "debug";\nconst log = debug("app:component");\nlog("message");'
      },
      'var ': {
        suggestion: 'Use const or let instead of var',
        alternative: 'const value = 42;\nlet counter = 0;'
      }
    },
    python: {
      'print': {
        suggestion: 'Consider using logging module for production code',
        alternative: 'import logging\nlogging.info("message")'
      },
      'type(': {
        suggestion: 'Consider using isinstance() for type checking',
        alternative: 'isinstance(obj, type)'
      }
    }
  };
  
  export function analyzeCode(code: string, language: string): AnalysisResult {
    const lines = code.split('\n');
    const errors = [];
    const alternatives = [];
  
    lines.forEach((line, index) => {
      // Check for basic syntax errors
      if (line.includes('{') && !line.includes('}')) {
        errors.push({
          line: index + 1,
          column: line.indexOf('{') + 1,
          message: 'Unclosed curly brace',
          severity: 'error',
          suggestion: 'Add a closing curly brace'
        });
      }
  
      // Check common patterns
      const patterns = COMMON_PATTERNS[language as keyof typeof COMMON_PATTERNS] || {};
      Object.entries(patterns).forEach(([pattern, { suggestion, alternative }]) => {
        if (line.includes(pattern)) {
          errors.push({
            line: index + 1,
            column: line.indexOf(pattern) + 1,
            message: `Found ${pattern}`,
            severity: 'warning',
            suggestion
          });
          alternatives.push({
            description: `Alternative to ${pattern}:`,
            code: alternative
          });
        }
      });
    });
  
    return { errors, alternatives };
  }