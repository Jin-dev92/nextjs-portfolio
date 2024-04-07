import { globalConfig } from '@/config/global.config';

export const replaceFalsyData = (object: Record<string, any>): Record<string, any | null> => {
  return Object.entries(object).reduce((acc: Record<string, any | null>, [key, value]) => {
    acc[key] = globalConfig.FALSY_DATA.includes(value) ? null : value;
    return acc;
  }, {});
};
