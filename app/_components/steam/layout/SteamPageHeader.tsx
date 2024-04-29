// @flow
import * as React from 'react';
import Stack from '@/app/_components/common/layout/Stack';
import Link from 'next/link';

type Props = {};
export const SteamPageHeader = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-[8px] w-full justify-end">
        <button type="button">Steam 설치</button>
        <Link href="#">로그인</Link>
        <Link href="#">언어</Link>
      </div>
      <Stack direction="row" twStyle="items-center">
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
      </Stack>
    </div>
  );
};
