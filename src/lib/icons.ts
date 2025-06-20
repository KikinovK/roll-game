import StartIcon from '../assets/icons/start.svg?react';
import GemIcon from '../assets/icons/gem.svg?react';
import StarIcon from '../assets/icons/star.svg?react';
import CashIcon from '../assets/icons/cash.svg?react';
import VIPIcon from '../assets/icons/vip.svg?react';
import PickaxeIcon from '../assets/icons/pickaxe.svg?react';
import GoldIcon from '../assets/icons/gold.svg?react';
import DiceIcon from '../assets/icons/dice.svg?react';
import TruckIcon from '../assets/icons/truck.svg?react';
import BoxIcon from '../assets/icons/box.svg?react';
import UnknownIcon from '../assets/icons/question.svg?react';

import type { CellType } from '../types/types';
import type { FC, SVGProps } from 'react';

export const CellIconsByType: Record<CellType, FC<SVGProps<SVGSVGElement>>> = {
  start: StartIcon,
  gem: GemIcon,
  star: StarIcon,
  cash: CashIcon,
  vip: VIPIcon,
  pickaxe: PickaxeIcon,
  gold: GoldIcon,
  dice: DiceIcon,
  truck: TruckIcon,
  box: BoxIcon,
  unknown: UnknownIcon,
};
