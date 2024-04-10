'use client';

import React from 'react';

type CarouselItem = {
  id: number;
  title: string;
  imageUrl: string;
};

export type useCarouselProps = {
  fetchData?: () => Promise<CarouselItem[]>;
  initialImages: [];
};

export default function useCarousel({ fetchData, initialImages }: useCarouselProps) {
  const [carouselItems, setCarouselItems] = React.useState<CarouselItem[]>(initialImages);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const fetchNewCarouselItems = async () => {
    if (fetchData === undefined) return;
    const newItems = await fetchData();
    if (newItems.length === 0) return;
    setCarouselItems(prev => [...prev, ...newItems]);
  };

  const handleNext = async () => {
    if (currentIndex === carouselItems.length - 1) {
      await fetchNewCarouselItems();
    }
    setCurrentIndex(prev => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const moveIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return { carouselItems, currentIndex, handleNext, handlePrev, moveIndex };
}
