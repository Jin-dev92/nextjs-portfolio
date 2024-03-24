import React from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';

type StackProps = {
  children: React.ReactNode;
  direction?: 'row' | 'col';
  twStyle?: ClassNameValue;
  spacing?: number;
};
export default function Stack({ children, direction = 'col', twStyle, spacing = 0 }: StackProps) {
  return (
    <div className={twMerge(`flex flex-${direction} gap-${spacing}`, twStyle || '')}>
      {children}
    </div>
  );
}
