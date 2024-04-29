// @flow
import * as React from 'react';
import { SteamSubNavigator } from '@/app/_components/steam/nav/SteamSubNavigator';
import CommonCarousel from '@/app/_components/common/carousel/CommonCarousel';

type Props = {};

export const SteamPageBody = (props: Props) => {
  return (
    <body className="w-full flex flex-col bg-steam-background flex flex-col items-center">
      <SteamSubNavigator />
      <div className="flex flex-row">
        <aside className="">
          <div className="flex flex-col gap-[16px]">
            <div>
              <p className="text-steam-sub-title">STEAM DECK</p>
              <p>어디서나 즐기는, Steam 라이브러리</p>
            </div>
            <div>
              <p className="text-steam-sub-title">STEAM 기프트 카드</p>
              <p>게임을 선물하세요</p>
            </div>
          </div>
          <nav className="flex flex-col gap-[16px]">
            <ul>
              <li className="text-steam-sub-title">추천 제품</li>
              <li className="text-steam-description-text">친구가 추천</li>
              <li className="text-steam-description-text">큐레이터가 추천</li>
              <li className="text-steam-description-text">태그</li>
            </ul>
            <ul>
              <li className="text-steam-sub-title">카테고리 검색</li>
              <li className="text-steam-description-text">인기 제품</li>
              <li className="text-steam-description-text">신규 출시</li>
              <li className="text-steam-description-text">출시 예정</li>
              <li className="text-steam-description-text">특별 할인</li>
              <li className="text-steam-description-text">VR 게임</li>
              <li className="text-steam-description-text">컨트롤러 지원</li>
              <li className="text-steam-description-text">Deck 완벽 호환</li>
            </ul>
            <ul>
              <li className="text-steam-sub-title">장르별 검색</li>
              <li className="text-steam-description-text">무료 앞서 해보기</li>
              <li className="text-steam-description-text">MMO</li>
              <li className="text-steam-description-text">RPG</li>
              <li className="text-steam-description-text">레이싱</li>
              <li className="text-steam-description-text">스포츠</li>
              <li className="text-steam-description-text">시뮬레이션</li>
              <li className="text-steam-description-text">액션</li>
              <li className="text-steam-description-text">어드벤처</li>
              <li className="text-steam-description-text">인디</li>
              <li className="text-steam-description-text">전략</li>
              <li className="text-steam-description-text">캐주얼</li>
            </ul>
          </nav>
        </aside>
        <CommonCarousel items={[]} title="특집 및 추천 제품" />
      </div>
    </body>
  );
};
