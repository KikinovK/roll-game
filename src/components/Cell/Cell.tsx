import type { FC } from 'react';
import type { Cell } from '../../types/types';
import { CellIconsByType } from '../../lib/icons';

type CellProps = Cell

const CellComponent: FC<CellProps> = ({
  type,
  value,
  state = 'default'
}) => {
  const Icon = CellIconsByType[type];

  return (
    <div
      className={`relative w-full h-full
        ${state === 'active' ? 'border-green-400' : 'border-gray-300'}
        ${state === 'highlighted' ? 'ring ring-yellow-400' : ''}
        ${state === 'disabled' ? 'opacity-50' : ''}
      `}
    >

      <Icon className="w-full h-full"/>

      {value && (
        <div className="absolute bottom-1 right-1 text-xs font-semibold text-white bg-black/50 px-1 rounded">
          {value}
        </div>
      )}
    </div>
  );
};

export default CellComponent;
