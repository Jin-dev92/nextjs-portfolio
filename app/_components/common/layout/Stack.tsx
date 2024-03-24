import React from 'react';
import { twMerge } from 'tailwind-merge';

type StackProps = {
  children: React.ReactNode;
  direction?: 'row' | 'col';
  css?: React.ComponentProps<'div'>['className'];
};
export default function Stack({ children, direction = 'col', css }: StackProps) {
  return <div className={twMerge('flex', `flex-${direction} ${css}`)}>{children}</div>;
}
