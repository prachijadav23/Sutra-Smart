// Add to existing types
export interface CodeAnalysis {
    errors: CodeError[];
    suggestions: CodeSuggestion[];
    quality: {
      complexity: number;
      maintainability: number;
      bestPractices: string[];
    };
  }
  
  export interface CodeSuggestion {
    line: number;
    message: string;
    severity?: 'info' | 'warning';
    example?: string;
  }
  
  export interface CodeError {
    line: number;
    column: number;
    type: 'syntax' | 'runtime' | 'logical';
    message: string;
    severity: 'error' | 'warning';
  }