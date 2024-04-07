import { SteamPageBody, SteamPageFooter, SteamPageHeader } from '@/app/_components/steam';

export default function SteamPage() {
  return (
    <div className={'bg-no-repeat w-screen bg-steam-background h-screen text-steam-white'}>
      <SteamPageHeader />
      <SteamPageBody />
      <SteamPageFooter />
    </div>
  );
}
