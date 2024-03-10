import { ErrorBoundary } from 'react-error-boundary';
import React, { useCallback } from 'react';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import GameLoadingSpinner from '@/app/_components/common/indicator/spinner/GameLoadingSpinner';
import { IndicatorTypeEnum } from '@/constant/enum/indicator-type.enum';
import MediumSkeleton from '@/app/_components/common/indicator/skeleton/MediumSkeleton';

type SuspenseComponentProps = {
  children: React.ReactNode;
  spinnerType: IndicatorTypeEnum;
};
export const SuspenseComponent = ({ children, spinnerType }: SuspenseComponentProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const Spinner = useCallback(() => {
    switch (spinnerType) {
      case IndicatorTypeEnum.GAME:
        return <GameLoadingSpinner />;
      case IndicatorTypeEnum.SKELETON:
        return <MediumSkeleton />;
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
