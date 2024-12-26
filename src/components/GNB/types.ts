import { ReactNode } from 'react';

export interface GNBItemType {
  title: string;
  path: string;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
}
