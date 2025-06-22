import type { Dispatch, SetStateAction } from "react";
import Button from "../ui/Button";
import PlusIcon from "../../assets/icons/plus.svg?react";
import DiceIcon from '../../assets/dice-icon.png';
import { MAX_ROLLS } from "../../lib/constant";

interface AddRoolsPanelProps {
  rolls: number;
  onAddRoll: Dispatch<SetStateAction<number>>;
}

const AddRoolsPanel = ({ rolls, onAddRoll }: AddRoolsPanelProps) => {
  return (
    <div className="flex items-center gap-2 text-white text-2xl font-bold">
      <img src={DiceIcon} alt="Dice icon" className="w-8 h-8" />
      <span>{rolls}</span>
      <Button
        variant="circle"
        size="icon"
        onClick={() => {onAddRoll((prev) => prev + 1)}}
        disabled={rolls >= MAX_ROLLS}
      >
        <PlusIcon  />
      </Button>
    </div>
  );
}

export default AddRoolsPanel;
