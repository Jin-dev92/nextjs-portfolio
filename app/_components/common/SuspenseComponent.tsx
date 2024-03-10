import { ErrorBoundary } from 'react-error-boundary';
import React, { useCallback } from 'react';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import GameLoadingSpinner from '@/app/_components/common/spinner/GameLoadingSpinner';
import { SpinnerTypeEnum } from '@/constant/enum/spinner-type.enum';

type SuspenseComponentProps = {
  children: React.ReactNode;
  spinnerType: SpinnerTypeEnum;
};
export const SuspenseComponent = ({ children, spinnerType }: SuspenseComponentProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const Spinner = useCallback(() => {
    switch (spinnerType) {
      case SpinnerTypeEnum.GAME:
        return <GameLoadingSpinner />;
      case SpinnerTypeEnum.SKELETON:
        return;
      default:
        return;
    }
  }, [spinnerType]);
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
      <React.Suspense fallback={Spinner()}>{children}</React.Suspense>
    </ErrorBoundary>
  );
};
