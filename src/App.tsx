import GameBoard from './components/Board/GameBoard';
import './index.css';

const App = () => {
  return (
    <div className="
        relative
        flex
        flex-col
        items-center
        justify-center
        min-h-screen
      "
    >
      <GameBoard />
    </div>
  )
}

export default App
