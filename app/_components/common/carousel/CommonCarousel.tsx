'use client';

import * as React from 'react';
import Slider, { Settings } from 'react-slick';
import { CarouselItem, ICarouselItem } from '@/app/_components/common/carousel/CarouselItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = { title: string; items: ICarouselItem[] };

export default function CommonCarousel({ title, items }: Props) {
  const defaultOptions: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col gap-[8px] min-w-[400px] ">
      {title && <p className="text-subTitle">{title}</p>}
      <Slider {...defaultOptions}>
        {items.map((item, index) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
}
