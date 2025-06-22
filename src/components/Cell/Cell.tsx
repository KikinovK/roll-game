import type { Cell } from '../../types/types';
import { CellIconsByType } from '../../lib/icons';
import { motion } from 'framer-motion';

type CellProps = Cell

const CellComponent = ({
  type,
  value,
  state = 'default'
}: CellProps) => {
   const iconSet = CellIconsByType[type];
  const iconSrc = state === 'active' ? iconSet.active : iconSet.default;

  const image = (
    <img
      src={iconSrc}
      alt={type}
      className="w-full h-full object-contain"
      draggable={false}
    />
  );

  return (
    <div
      className={`relative w-full h-full`}
    >

      {state === 'active' && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full h-full"
        >
          {image}
        </motion.div>
      )}

      {state === 'default' && image}

      {value && (
        <div className="absolute bottom-1 right-[50%]  translate-x-1/2 text-xs font-semibold text-white bg-black/50 px-1 rounded whitespace-nowrap">
          {value}
        </div>
      )}
    </div>
  );
};

export default CellComponent;
