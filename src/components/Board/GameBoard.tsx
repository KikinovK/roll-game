import { cells } from "../../lib/cells";
import CellComponent from "../Cell/Cell";

type GameBoardProps = {
  children: React.ReactNode;
};

const GameBoard = ({ children }: GameBoardProps) => {
  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-[2px] w-[min(80vw,500px)] aspect-square">
      <div
        className="col-start-2 row-start-2 col-span-4 row-span-4   flex items-center justify-center text-xl font-bold overflow-hidden"
      >
        {children}
      </div>
      {cells.map((cell) => (
        <div
          key={cell.id}
        >
          <CellComponent  {...cell} />
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
