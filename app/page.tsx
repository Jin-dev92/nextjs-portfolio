import Stack from './_components/common/layout/Stack';
import React from 'react';
import AppIcon from '@/app/_components/common/icon/AppIcon';

export default function Home() {
  return (
    <main className={''}>
      <Stack>
        <AppIcon src={'/images/steam_logo.png'} />
      </Stack>
    </main>
  );
}
