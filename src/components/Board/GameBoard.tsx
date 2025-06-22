import { useEffect, useRef, useState } from "react";
import { cells } from "../../lib/cells";
import { positions } from "../../lib/positions";
import CellComponent from "../Cell/Cell";
import Token from "../Token/Token";

type GameBoardProps = {
  children: React.ReactNode;
  tokenPosition: number;
  finalPosition: number | null;
};

const GameBoard = ({ children, tokenPosition, finalPosition }: GameBoardProps) => {
  const [cellSize, setCellSize] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (boardRef.current) {
        const width = boardRef.current.offsetWidth;
        const size = (width - 10) / 6;
        setCellSize(size);
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    if (boardRef.current) resizeObserver.observe(boardRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={boardRef} className="relative grid grid-cols-6 grid-rows-6 gap-[2px] w-[min(80vw,500px)] aspect-square">
      <Token
        x={positions[tokenPosition].x}
        y={positions[tokenPosition].y}
        cellSize={cellSize}
        isHiden={tokenPosition === finalPosition}
      />

      <div
        className="col-start-2 row-start-2 col-span-4 row-span-4   flex items-center justify-center text-xl font-bold overflow-hidden"
      >
        {children}
      </div>
      {cells.map((cell) => (
        <div
          key={cell.id}
        >
          <CellComponent  {...cell} state={cell.id === finalPosition ? 'active' : 'default'}/>
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
