// @flow
import * as React from 'react';
import { SteamSubNavigator } from '@/app/_components/steam/nav/SteamSubNavigator';
import CommonCarousel from '@/app/_components/common/carousel/CommonCarousel';

type Props = {};

export const SteamPageBody = (props: Props) => {
  return (
    <body className="w-full flex flex-col bg-steam-background">
      <SteamSubNavigator />
      <div className="flex flex-row">
        <aside className="">
          <div>
            <p>STEAM DECK</p>
            <p>어디서나 즐기는, Steam 라이브러리</p>
          </div>
          <div>
            <p>STEAM 기프트 카드</p>
            <p>게임을 선물하세요</p>
          </div>
          <nav>
            <ul>
              <li>추천 제품</li>
              <li>친구가 추천</li>
              <li>큐레이터가 추천</li>
              <li>태그</li>
            </ul>
            <ul>
              <li>카테고리 검색</li>
              <li>인기 제품</li>
              <li>신규 출시</li>
              <li>출시 예정</li>
              <li>특별 할인</li>
              <li>VR 게임</li>
              <li>컨트롤러 지원</li>
              <li>Deck 완벽 호환</li>
            </ul>
            <ul>
              <li>장르별 검색</li>
              <li>무료 앞서 해보기</li>
              <li>MMO</li>
              <li>RPG</li>
              <li>레이싱</li>
              <li>스포츠</li>
              <li>시뮬레이션</li>
              <li>액션</li>
              <li>어드벤처</li>
              <li>인디</li>
              <li>전략</li>
              <li>캐주얼</li>
            </ul>
          </nav>
        </aside>
        <CommonCarousel items={[]} title="특집 및 추천 제품" />
      </div>
    </body>
  );
};
