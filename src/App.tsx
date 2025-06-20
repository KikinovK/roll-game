import GameBoard from './components/Board/GameBoard';
import Button from './components/ui/Button';
import './index.css';

const App = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen gap-8"
    >
      <GameBoard />
      <Button>Roll</Button>
      <Button variant="outline" size="sm">How to Play?</Button>
    </div>
  )
}

export default App
