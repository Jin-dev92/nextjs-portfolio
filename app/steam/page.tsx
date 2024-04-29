import React from 'react';
import { SteamPageHeader } from '@/app/_components/steam/layout/SteamPageHeader';
import { SteamPageBody } from '@/app/_components/steam/layout/SteamPageBody';

export default function SteamPage() {
  return (
    <main className="text-steam-white flex flex-col items-center p-[16px]">
      <div className="w-[60%]">
        <SteamPageHeader />
        <SteamPageBody />
      </div>
      {/*<SteamPageFooter />*/}
    </main>
  );
}
