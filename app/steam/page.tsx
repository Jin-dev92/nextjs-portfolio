import React from 'react';
import { SteamPageHeader } from '@/app/_components/steam/layout/SteamPageHeader';
import { SteamPageBody } from '@/app/_components/steam/layout/SteamPageBody';
import { SteamPageFooter } from '@/app/_components/steam/layout/SteamPageFooter';

export default function SteamPage() {
  return (
    <main className="bg-repeat w-screen bg-steam-background h-screen text-steam-white flex flex-col items-center">
      <SteamPageHeader />
      <SteamPageBody />
      <SteamPageFooter />
    </main>
  );
}
