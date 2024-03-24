import React from 'react';
import { twMerge } from 'tailwind-merge';

type AppIconProps = {
  src: string;
  css?: React.ComponentProps<'div'>['className'];
};
export default function AppIcon({ src, css }: AppIconProps) {
  return (
    <div className={twMerge('w-[100px] h-[100px] border rounded-[15px]', `${css}`)}>
      <img src={src} alt="icon" />
    </div>
  );
}
