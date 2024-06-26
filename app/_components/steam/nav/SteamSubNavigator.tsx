// @flow
import * as React from 'react';
import Image from 'next/image';

type Props = {};

export const SteamSubNavigator = (props: Props) => {
  return (
    <nav className="flex flex-row items-center justify-evenly w-full">
      <div className="flex flex-row items-center gap-[20px]">
        <div className="">내 상점</div>
        <div className="">신규 및 특잡</div>
        <div className="">카테고리</div>
        <div className="">포인트 상점</div>
        <div className="">뉴스</div>
        <div className="">실험실</div>
      </div>
      <div className="flex flex-row items-center gap-[4px]">
        <input type="text" placeholder="검색하기" />
        <button className="rounded-[5px]" type="button">
          <Image src="/icons/search_icon_btn.png" alt="search" width={25} height={25} />
        </button>
      </div>
    </nav>
  );
};
