// @flow
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {};
export const SteamPageHeader = (props: Props) => {
  return (
    <div>
      <span className="flex flex-row gap-4 justify-end">
        <button type="button">Steam 설치</button>
        <Link href="#">로그인</Link>
        <Link href="#">언어</Link>
      </span>
      <nav className="flex flex-row items-center">
        <Link href="/steam">
          <Image
            src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg"
            width={176}
            height={44}
            alt="Steam 홈페이지 링크"
          />
        </Link>
        <ul className="list-none inline-flex gap-4">
          <li>
            <Link href="#">상점</Link>
          </li>
          <li>
            <Link href="#">커뮤니티</Link>
          </li>
          <li>
            <Link href="#">정보</Link>
          </li>
          <li>
            <Link href="#">지원</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
