// @flow
import * as React from 'react';
import { SteamSubNavigator } from '@/app/_components/steam/nav/SteamSubNavigator';

type Props = {};

export const SteamPageBody = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center">
      <SteamSubNavigator />
    </div>
  );
};
