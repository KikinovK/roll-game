import { useState } from 'react';
import GameBoard from './components/Board/GameBoard';
import Dice from './components/Dice/Dice';
import Button from './components/ui/Button';
import './index.css';
import RollIndicator from './components/RollIndicator/RollIndicator';
import { MAX_ROLLS, ROLL_RESTORE_TIME } from './lib/constant';
import HomeIndicator from './components/ui/HomeIndicator';
import AddRoolsPanel from './components/AddRoolsPanel/AddRoolsPanel';
import Title from './components/ui/Title';

const App = () => {
    const [rolling, setRolling] = useState(false);
    const [rolls, setRolls] = useState(MAX_ROLLS);
    const [lastUsed, setLastUsed] = useState<number>(Date.now());
    const [timeLeft, setTimeLeft] = useState(ROLL_RESTORE_TIME);

   const handleRoll = () => {
    setRolling(true);
  };

  const handleRollEnd = (value: number) => {
    setRolling(false);
    setRolls((prev) => Math.max(0, prev - 1));
    setLastUsed(Date.now());
    console.log('Result:', value);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen gap-8 px-4 pt-8"
    >
      <Title>Roll Craft</Title>
      <RollIndicator
        rolls={rolls}
        setRolls={setRolls}
        lastUsed={lastUsed}
        setLastUsed={setLastUsed}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
      />
      <GameBoard >
        <Dice isRolling={rolling} onRollEnd={handleRollEnd} />
      </GameBoard>
      <AddRoolsPanel
        rolls={rolls}
        onAddRoll={setRolls}
      />
      <Button onClick={handleRoll} disabled={rolling}>Roll</Button>
      <Button variant="outline" size="sm">How to Play?</Button>
      <HomeIndicator />
    </div>
  )
}

export default App
