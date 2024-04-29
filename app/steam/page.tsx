import React from 'react';
import { SteamPageHeader } from '@/app/_components/steam/layout/SteamPageHeader';
import { SteamPageBody } from '@/app/_components/steam/layout/SteamPageBody';
import { SteamPageFooter } from '@/app/_components/steam/layout/SteamPageFooter';

export default function SteamPage() {
  return (
    <main className="bg-repeat w-full h-full bg-steam-background text-steam-white mx-auto my-0">
      <SteamPageHeader />
      <SteamPageBody />
      <SteamPageFooter />
    </main>
  );
}
