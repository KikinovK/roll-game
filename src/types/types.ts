export type CellType =
  | 'start'
  | 'gem'
  | 'star'
  | 'cash'
  | 'vip'
  | 'pickaxe'
  | 'gold'
  | 'dice'
  | 'truck'
  | 'box'
  | 'unknown';

export type CellState = 'default' | 'active';

export interface Cell {
  id: number;
  type: CellType;
  value?: number | string;
  state?: CellState;
}
