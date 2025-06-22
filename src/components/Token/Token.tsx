import clsx from "clsx";
import { motion } from "framer-motion";

interface TokenProps {
  x: number;
  y: number;
  cellSize: number;
  isHiden: boolean;
}

const Token = ({ x, y, cellSize, isHiden }: TokenProps) => {
  return (
    <motion.div
      animate={{ x: x * cellSize + x * 2, y: y * cellSize + y * 2 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        width: cellSize,
        height: cellSize,
      }}
      className={clsx(
        'absolute z-20 rounded-[6px] overflow-hidden',
        'transition-opacity duration-300',
        {
          'opacity-0 pointer-events-none': isHiden,
          'opacity-100': !isHiden,
        }
      )}
    >

      <div
        className="w-full h-full rounded-[4px] border-[4px]"
        style={{
          borderImage: "linear-gradient(180deg, rgba(130,224,36,0.8), rgba(73,145,0,0.8)) 1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <div
          className="w-full h-full rounded-[2px] border-[2px]"
          style={{
            borderImage: "linear-gradient(180deg, rgba(130,224,36,0.5), rgba(73,145,0,0.5)) 1",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Token;
