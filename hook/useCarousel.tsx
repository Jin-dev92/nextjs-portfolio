// @flow

import { useState } from 'react';

type CarouselItem = {
  id: number;
  title: string;
  imageUrl: string;
};

type Props = {
  fetchData: () => Promise<CarouselItem[]>;
  initialImages: [];
};

export const useCarousel = ({ fetchData, initialImages }: Props) => {
  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchNewCarouselItems = async () => {
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

  return { carouselItems, currentIndex, handleNext, handlePrev };
};
