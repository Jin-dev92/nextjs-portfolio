import Image from 'next/image';
import * as React from 'react';
import { IImage } from '@/types';

export interface ICarouselItem extends IImage {
  title: string;
  imageUrl: string;
  id: number;
}

export const CarouselItem = ({ title, imageUrl, id }: ICarouselItem) => {
  return (
    <div className="w-full">
      <Image src={imageUrl} alt={title} />
    </div>
  );
};
