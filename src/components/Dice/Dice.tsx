import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import dice1 from '../../assets/dice/dice-1.svg';
import dice2 from '../../assets/dice/dice-2.svg';
import dice3 from '../../assets/dice/dice-3.svg';

import side1 from '../../assets/dice/dice-side-1.svg';
import side2 from '../../assets/dice/dice-side-2.svg';
import side3 from '../../assets/dice/dice-side-3.svg';
import side4 from '../../assets/dice/dice-side-4.svg';
import side5 from '../../assets/dice/dice-side-5.svg';
import side6 from '../../assets/dice/dice-side-6.svg';

import aura from '../../assets/dice/aura.png';


interface DiceProps {
  isRolling?: boolean;
  onRollEnd?: (value: number) => void;
}

const animationFrames = [dice1, dice2, dice3];
const diceSides = [side1, side2, side3, side4, side5, side6];

const Dice = ({ isRolling, onRollEnd }: DiceProps) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [result, setResult] = useState<number | null>(null);
  const [showFinal, setShowFinal] = useState(false);
  const [rolling, setRolling] = useState(false);

  useEffect(() => {
    if (!isRolling || rolling) return;

    setRolling(true);
    setShowFinal(false);
    setResult(null);

    let i = 0;
    const interval = setInterval(() => {
      setFrameIndex(i % animationFrames.length);
      i++;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const value = Math.floor(Math.random() * 6);
      setResult(value);
      setShowFinal(true);
      onRollEnd?.(value + 1);

      setTimeout(() => {
        setRolling(false);
      }, 800);
    }, 900);

    return () => clearInterval(interval);
  }, [isRolling]);

  return (
    <div className="relative w-[30%] h-[30%] select-none">
      {!showFinal && (
        <img
          src={animationFrames[frameIndex]}
          alt="Rolling Dice"
          className="w-full h-full object-contain"
        />
      )}

      <AnimatePresence>
        {showFinal && result !== null && (
          <>
            <motion.img
              src={aura}
              alt="Aura"
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ scale: 5, opacity: 0.8 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none mix-blend-overlay"
            />

            <motion.img
              key={result}
              src={diceSides[result]}
              alt={`Dice side ${result}`}
              initial={{ scale: 2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full object-contain z-10"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dice;
