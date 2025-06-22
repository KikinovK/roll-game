import { useEffect, useRef, useState } from "react";
import { cells } from "../../lib/cells";
import { positions } from "../../lib/positions";
import CellComponent from "../Cell/Cell";
import Token from "../Token/Token";

type GameBoardProps = {
  children: React.ReactNode;
  tokenPosition: number;
};

const GameBoard = ({ children, tokenPosition }: GameBoardProps) => {

  const [cellSize, setCellSize] = useState(0);
  const cellRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (boardRef.current) {
        const width = boardRef.current.offsetWidth;
        const size = (width - 10) / 6; // 6 колонок, 5 промежутков по 2px
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
      <Token x={positions[tokenPosition].x} y={positions[tokenPosition].y} cellSize={cellSize} />
      <div
        className="col-start-2 row-start-2 col-span-4 row-span-4   flex items-center justify-center text-xl font-bold overflow-hidden"
      >
        {children}
      </div>
      {cells.map((cell, index) => (
        <div
          key={cell.id}
          ref={index === 0 ? cellRef : undefined}
        >
          <CellComponent  {...cell} />
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
