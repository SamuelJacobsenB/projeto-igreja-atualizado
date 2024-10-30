import React from "react";
import { Two_buttons } from "./twoButtons";

interface DefaultTwoButtonsProps {
  onEdit: () => void;
  onDelete: () => Promise<void>;
}

const DefaultTwoButtons: React.FC<DefaultTwoButtonsProps> = ({
  onEdit,
  onDelete,
}: DefaultTwoButtonsProps) => {
  return (
    <Two_buttons.root>
      <Two_buttons.btn.edit onClick={onEdit} />
      <Two_buttons.btn.delete onClick={onDelete} />
    </Two_buttons.root>
  );
};

export default DefaultTwoButtons;
