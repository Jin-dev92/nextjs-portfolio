import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import LoadingIndicator from '@/app/_components/common/indicator/LoadingIndicator';

type SuspenseComponentProps = {
  children: React.ReactNode;
};
export const SuspenseComponent = ({ children }: SuspenseComponentProps) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          There was an error!
          <button onClick={() => resetErrorBoundary()}>Try again</button>
        </div>
      )}
    >
      <React.Suspense fallback={<LoadingIndicator />}>{children}</React.Suspense>
    </ErrorBoundary>
  );
};
