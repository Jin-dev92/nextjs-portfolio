import React from 'react';
import { FallbackProps } from 'react-error-boundary';

export const ErrorBoundaryFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      There was an error!
      <button onClick={resetErrorBoundary} type="button">
        Try again
      </button>
    </div>
  );
};
