import { Button } from "@mantine/core";
import { CirclePlus } from "tabler-icons-react";

export const AddNewTimerListItemButton = ({ onClick }) => {
  return (
    <Button
      leftIcon={<CirclePlus />}
      variant="gradient"
      onClick={onClick}
      size="sm"
    >
      Add New Timer
    </Button>
  );
};
