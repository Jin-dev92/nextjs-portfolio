'use client';

import useCarousel, { useCarouselProps } from '@/hook/useCarousel';
import React from 'react';

export default function CommonCarousel({ fetchData, initialImages }: useCarouselProps) {
  const { handlePrev, carouselItems, handleNext, currentIndex, moveIndex } = useCarousel({
    initialImages,
    fetchData,
  });
  return <div className="w-full min-h-[300px]">asd</div>;
}
