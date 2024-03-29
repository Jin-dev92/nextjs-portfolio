import Stack from '@/app/_components/common/layout/Stack';
import Link from 'next/link';

export default function SteamPage() {
  return (
    <div className={''}>
      <div className={''}>
        <Stack>
          <Stack direction={'row'} spacing={4}>
            <button>Steam 설치</button>
            <Link href={''}>로그인</Link>
            <Link href={''}>언어</Link>
          </Stack>
          <Stack direction={'row'} twStyle={'items-center'}>
            <img
              className={'w-[176px]'}
              src="https://store.akamai.steamstatic.com/public/shared/images/responsive/header_logo.png"
              alt="logo"
            />
            <ul className={'list-none inline-flex gap-4'}>
              <li>
                <Link href={''}>상점</Link>
              </li>
              <li>
                <Link href={''}>커뮤니티</Link>
              </li>
              <li>
                <Link href={''}>정보</Link>
              </li>
              <li>
                <Link href={''}>지원</Link>
              </li>
            </ul>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}
