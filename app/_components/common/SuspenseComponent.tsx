import { ErrorBoundary } from 'react-error-boundary';
import React, { Suspense } from 'react';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import GameLoadingSpinner from '@/app/_components/common/indicator/spinner/GameLoadingSpinner';
import { IndicatorTypeEnum } from '@/constant/enum/indicator-type.enum';
import MediumSkeleton from '@/app/_components/common/indicator/skeleton/MediumSkeleton';
import { ErrorBoundaryFallback } from '@/app/_components/common/ErrorBoundaryFallback';

type SpinnerProps = {
  spinnerType: IndicatorTypeEnum;
};

const Spinner = ({ spinnerType }: SpinnerProps) => {
  switch (spinnerType) {
    case IndicatorTypeEnum.GAME:
      return <GameLoadingSpinner />;
    case IndicatorTypeEnum.SKELETON:
      return <MediumSkeleton />;
    default:
      return null;
  }
};

type SuspenseComponentProps = {
  children: React.ReactNode;
  spinnerType: IndicatorTypeEnum;
};

export const SuspenseComponent = ({ children, spinnerType }: SuspenseComponentProps) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary onReset={reset} fallbackRender={ErrorBoundaryFallback}>
      <Suspense fallback={<Spinner spinnerType={spinnerType} />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
