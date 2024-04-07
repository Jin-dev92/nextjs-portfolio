import { SteamPageHeader } from '@/app/_components/steam/layout/SteamPageHeader';
import { SteamPageFooter } from '@/app/_components/steam/layout/SteamPageFooter';

export default function SteamPage() {
  return (
    <div className={'bg-no-repeat w-screen bg-steam-background h-screen text-steam-white'}>
      <SteamPageHeader />
      <SteamPageFooter />
    </div>
  );
}
