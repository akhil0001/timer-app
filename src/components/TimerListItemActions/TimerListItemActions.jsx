import { ActionIcon, Group } from "@mantine/core";
import { memo } from "react";
import {
  PlayerPause,
  PlayerPlay,
  PlayerStop,
  RotateRectangle,
} from "tabler-icons-react";

export const TimerListItemActions = memo(
  ({
    isPlaying,
    isCompleted,
    pauseTimer,
    stopTimer,
    playTimer,
    restartTimer,
  }) => {
    return isPlaying ? (
      <Group>
        <ActionIcon color="red" onClick={stopTimer}>
          <PlayerStop />
        </ActionIcon>
        <ActionIcon color="blue" onClick={pauseTimer}>
          <PlayerPause />
        </ActionIcon>
      </Group>
    ) : isCompleted ? (
      <ActionIcon color="yellow" onClick={restartTimer}>
        <RotateRectangle />
      </ActionIcon>
    ) : (
      <ActionIcon color="green" onClick={playTimer}>
        <PlayerPlay />
      </ActionIcon>
    );
  }
);
