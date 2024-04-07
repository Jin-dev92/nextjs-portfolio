// @flow
import * as React from 'react';
import Link from 'next/link';

type Props = {};

export function SteamPageFooter(props: Props) {
  return (
    <div
      className={
        'my-0 mx-auto h-fit flex flex-row items-center justify-evenly bg-[#171a21] pt-[16px] pb-[60px]'
      }
    >
      <div className={'flex flex-row items-center gap-[8px]'}>
        <Link href={'https://www.valvesoftware.com/en/'} target={'_blank'}>
          <img src="/images/steam/footer_logo_value.png" alt="logo" className={'h-[30px] w-auto'} />
        </Link>
        <div className={'flex flex-col'}>
          <p className={'text-[12px] text-steam-grey'}>
            © 2024 Valve Corporation. All rights reserved. 모든 상표는 미국 및 기타 국가에서
            해당하는 소유자의 재산입니다.
          </p>
          <div className={'flex flex-row gap-[16px]'}>
            <p className={'text-[12px] text-steam-grey'}>부가 가치세 포함</p>
            <div className={'flex flex-row items-center gap-[8px]'}>
              <Link href={''} className={'text-[12px]'}>
                개인정보 보호정책
              </Link>
              <Link href={''} className={'text-[12px]'}>
                사용권
              </Link>
              <Link href={''} className={'text-[12px]'}>
                Steam 이용 약관
              </Link>
              <Link href={''} className={'text-[12px]'}>
                환불
              </Link>
              <Link href={''} className={'text-[12px]'}>
                쿠키
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/steam/logo_steam_footer.png" alt="steam_logo_footer" />
      </div>
    </div>
  );
}
