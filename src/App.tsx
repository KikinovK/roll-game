import { useState } from 'react';
import GameBoard from './components/Board/GameBoard';
import Dice from './components/Dice/Dice';
import Button from './components/ui/Button';
import './index.css';

const App = () => {
    const [rolling, setRolling] = useState(false);

   const handleRoll = () => {
    setRolling(true);
  };

  const handleRollEnd = (value: number) => {
    setRolling(false);
    console.log('Result:', value);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen gap-8"
    >
      <GameBoard >
        <Dice isRolling={rolling} onRollEnd={handleRollEnd} />
      </GameBoard>
      <Button onClick={handleRoll} disabled={rolling}>Roll</Button>
      <Button variant="outline" size="sm">How to Play?</Button>
    </div>
  )
}

export default App
