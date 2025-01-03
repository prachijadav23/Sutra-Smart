import { CodeAnalysis, CodeError, CodeSuggestion } from '../types';

export function analyzeCode(code: string, language: string): CodeAnalysis {
  const errors: CodeError[] = [];
  const suggestions: CodeSuggestion[] = [];
  const lines = code.split('\n');

  // Syntax analysis
  lines.forEach((line, index) => {
    // Check for unclosed brackets/parentheses
    const openBrackets = (line.match(/[({[]/g) || []).length;
    const closeBrackets = (line.match(/[)}\]]/g) || []).length;
    if (openBrackets !== closeBrackets) {
      errors.push({
        line: index + 1,
        column: line.length,
        type: 'syntax',
        message: 'Unclosed brackets or parentheses',
        severity: 'error'
      });
    }

    // Language-specific checks
    if (language === 'javascript' || language === 'typescript') {
      // Check for console.log
      if (line.includes('console.log')) {
        suggestions.push({
          line: index + 1,
          message: 'Consider using a logging library for production code',
          example: 'import debug from "debug";\nconst log = debug("app:component");'
        });
      }

      // Check for var usage
      if (line.includes('var ')) {
        suggestions.push({
          line: index + 1,
          message: 'Use const or let instead of var',
          example: 'const value = 42;\nlet counter = 0;'
        });
      }
    }

    // Check for long lines
    if (line.length > 80) {
      suggestions.push({
        line: index + 1,
        message: 'Consider breaking this line for better readability',
        severity: 'warning'
      });
    }
  });

  // Code quality analysis
  const codeQuality = {
    complexity: calculateComplexity(code),
    maintainability: analyzeMaintainability(code),
    bestPractices: checkBestPractices(code, language)
  };

  return {
    errors,
    suggestions,
    quality: codeQuality
  };
}

function calculateComplexity(code: string): number {
  // Simple complexity calculation based on control structures
  const controlStructures = (code.match(/(if|for|while|switch|catch)/g) || []).length;
  return Math.min(10, Math.ceil(controlStructures / 2));
}

function analyzeMaintainability(code: string): number {
  // Basic maintainability score (0-10)
  const lines = code.split('\n').length;
  const comments = (code.match(/\/\//g) || []).length;
  return Math.min(10, Math.ceil((comments / lines) * 10));
}

function checkBestPractices(code: string, language: string): string[] {
  const issues: string[] = [];

  if (language === 'javascript' || language === 'typescript') {
    if (code.includes('==')) {
      issues.push('Use === instead of == for strict equality comparison');
    }
    if (code.includes('!important')) {
      issues.push('Avoid using !important in CSS');
    }
  }

  return issues;
}