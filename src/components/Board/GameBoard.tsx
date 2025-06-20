import { cells } from "../../lib/cells";
import CellComponent from "../Cell/Cell";

const GameBoard = () => {


  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-[2px] w-[min(80vw,500px)] aspect-square mx-auto my-8">
      <div
        key="center"
        className="col-start-2 row-start-2 col-span-4 row-span-4 bg-white rounded-lg border-4 border-indigo-400 flex items-center justify-center text-xl font-bold"
      >
        CENTER
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
