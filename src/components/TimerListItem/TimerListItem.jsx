import { Group, Paper } from "@mantine/core";
import { TimerContainer } from "../../containers/TimerContainer";
import { TimerListItemTitleContainer } from "../../containers/TimerListItemTitleContainer/TimerListItemTitleContainer";
import { TimerListItemActionsContainer } from "../../containers/TimerListItemActionsContainer";
import { TimerListItemProgress } from "../TimerListItemProgress";

export const TimerListItem = ({
  timeAtom,
  titleAtom,
  originalTimeAtom,
  statusAtom,
}) => {
  return (
    <Paper shadow="md" p="md" mt={10} mr={10} ml={10} withBorder>
      <Group position="apart" spacing="xl" grow>
        <TimerListItemTitleContainer
          titleAtom={titleAtom}
          statusAtom={statusAtom}
        />
        <TimerContainer
          timeAtom={timeAtom}
          originalTimeAtom={originalTimeAtom}
        />
        {/* <TimerListItemProgress
          originalTimeAtom={originalTimeAtom}
          timeAtom={timeAtom}
        /> */}
        <TimerListItemActionsContainer
          timeAtom={timeAtom}
          originalTimeAtom={originalTimeAtom}
          statusAtom={statusAtom}
        />
      </Group>
    </Paper>
  );
};
