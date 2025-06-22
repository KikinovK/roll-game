import type { CellType } from '../types/types';

import start from '../assets/icons/start.png';
import startActive from '../assets/icons/start-active.png';

import gem from '../assets/icons/gem.png';
import gemActive from '../assets/icons/gem-active.png';

import star from '../assets/icons/star.png';
import starActive from '../assets/icons/star-active.png';

import cash from '../assets/icons/cash.png';
import cashActive from '../assets/icons/cash-active.png';

import vip from '../assets/icons/vip.png';
import vipActive from '../assets/icons/vip-active.png';

import pickaxe from '../assets/icons/pickaxe.png';
import pickaxeActive from '../assets/icons/pickaxe-active.png';

import gold from '../assets/icons/gold.png';
import goldActive from '../assets/icons/gold-active.png';

import dice from '../assets/icons/dice.png';
import diceActive from '../assets/icons/dice-active.png';

import truck from '../assets/icons/track.png';
import truckActive from '../assets/icons/track-active.png';

import box from '../assets/icons/box.png';
import boxActive from '../assets/icons/box-active.png';

import unknown from '../assets/icons/question.png';
import unknownActive from '../assets/icons/question-active.png';

export const CellIconsByType: Record<CellType, {
  default: string;
  active: string;
}> = {
  start: { default: start, active: startActive },
  gem: { default: gem, active: gemActive },
  star: { default: star, active: starActive },
  cash: { default: cash, active: cashActive },
  vip: { default: vip, active: vipActive },
  pickaxe: { default: pickaxe, active: pickaxeActive },
  gold: { default: gold, active: goldActive },
  dice: { default: dice, active: diceActive },
  truck: { default: truck, active: truckActive },
  box: { default: box, active: boxActive },
  unknown: { default: unknown, active: unknownActive },
};
