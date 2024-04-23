import React from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';
import Image from 'next/image';

type AppIconProps = {
  src: string;
  css?: ClassNameValue;
};
export const AppIcon = ({ src, css }: AppIconProps) => {
  return (
    <div className={twMerge('w-[100px] h-[100px] rounded-[15px] bg-white', `${css}`)}>
      <Image src={src} alt="icon" className="object-cover" width={50} height={50} />
    </div>
  );
};
