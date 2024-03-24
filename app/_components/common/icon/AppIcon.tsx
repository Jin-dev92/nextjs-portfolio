import React from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';

type AppIconProps = {
  src: string;
  css?: ClassNameValue;
};
export default function AppIcon({ src, css }: AppIconProps) {
  return (
    <div className={twMerge('w-[100px] h-[100px] rounded-[15px] bg-white', `${css}`)}>
      <img src={src} alt="icon" className={'object-cover'} />
    </div>
  );
}
