import { useEffect, useLayoutEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import { MAX_ROLLS, ROLL_RESTORE_TIME } from '../../lib/constant';
import { motion } from 'framer-motion';

interface RollIndicatorProps {
  rolls: number;
  setRolls: Dispatch<SetStateAction<number>>;
  lastUsed: number;
  setLastUsed: Dispatch<SetStateAction<number>>;
  timeLeft: number;
  setTimeLeft: Dispatch<SetStateAction<number>>;
}

const formatTime = (ms: number) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalSeconds / 3600);
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const RollIndicator = ({
  rolls,
  setRolls,
  lastUsed,
  setLastUsed,
  timeLeft,
  setTimeLeft,
}: RollIndicatorProps) => {
  const hasMountedRef = useRef(false);
  const prevRollsRef = useRef<number>(rolls);
  const [isRollingDown, setIsRollingDown] = useState(false);

  useEffect(() => {
    if (rolls < prevRollsRef.current) {
      setIsRollingDown(true);
    } else {
      setIsRollingDown(false);
    }
    prevRollsRef.current = rolls;
  }, [rolls]);

  useLayoutEffect(() => {
    hasMountedRef.current = true;
  }, []);

  useEffect(() => {
    if (rolls >= MAX_ROLLS) {
      setTimeLeft(ROLL_RESTORE_TIME);
      return;
    }
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = now - lastUsed;
      let remaining = ROLL_RESTORE_TIME - diff;

      if (remaining > timeLeft ) {
        remaining = timeLeft;
        setLastUsed(Date.now() - ROLL_RESTORE_TIME + timeLeft);
      }

      if (rolls < MAX_ROLLS && remaining <= 0) {
        setRolls((prev) => Math.min(MAX_ROLLS, prev + 1));
        setLastUsed(Date.now());
        setTimeLeft(ROLL_RESTORE_TIME);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [rolls, lastUsed]);

  return (
    <div className="w-[min(80vw,500px)] flex flex-col items-center text-white ">

      <div className="flex justify-between w-full mt-2 mb-0.5">
        <span className="text-sm text-white/70">Available rolls</span>
        <span className="text-xl font-bold">{rolls}/{MAX_ROLLS}</span>
      </div>

      <div className="grid grid-cols-10 gap-[1px] w-full mb-2">
        {Array.from({ length: MAX_ROLLS }).map((_, i) => {
          return (
            <div
              key={i}
              className={`
                relative h-4 bg-white/20 overflow-hidden rounded-xs
                ${i === 0 ? 'rounded-tl-md rounded-bl-md' : ''}
                ${i === MAX_ROLLS - 1 ? 'rounded-tr-md rounded-br-md' : ''}
              `}
            >
              {i === rolls && isRollingDown&& (
                <motion.div
                  initial={{
                    width: '100%',
                  }}
                  animate={{
                    width: '0',
                  }}
                  transition={
                    hasMountedRef.current
                      ? { duration: 0.4, ease: 'easeOut' }
                      : { duration: 0 }
                  }
                  className="h-full bg-gradient-to-t from-[#FFA200] to-[#FFD600]"
                />
              )}
              {i < rolls && (
                <motion.div
                  initial={{
                    width: '0',
                  }}
                  animate={{
                    width: '100%',
                  }}
                  transition={
                    hasMountedRef.current
                      ? { duration: 0.4, ease: 'easeOut' }
                      : { duration: 0 }
                  }
                  className="h-full bg-gradient-to-t from-[#FFA200] to-[#FFD600]"
                />
              )}
            </div>
          );
        })}
      </div>

      {rolls < MAX_ROLLS && (
        <div className="text-sm text-white/60 border border-white/20 px-[8px] py-[5px] rounded-lg font-mono">
          {formatTime(timeLeft)}
        </div>
      )}
    </div>
  );
};

export default RollIndicator;
