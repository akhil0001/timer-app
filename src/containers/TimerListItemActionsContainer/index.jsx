import { useMachine } from "@xstate/react";
import { useAtom } from "jotai";
import { memo, useCallback, useEffect } from "react";
import { TimerListItemActions } from "../../components/TimerListItemActions/TimerListItemActions";
import { TimerMachine } from "../../store/machines/timerMachine";

export const TimerListItemActionsContainer = memo(
  ({ timeAtom, originalTimeAtom, statusAtom }) => {
    const [timerState, sendTimerState] = useMachine(TimerMachine);
    const [time, setTime] = useAtom(timeAtom);
    const [originalTime] = useAtom(originalTimeAtom);
    const [, setStatus] = useAtom(statusAtom);
    const isPlaying = timerState.matches("playing");
    const isCompleted =
      timerState.matches("idle") && !!timerState.context.completed;
    const isPaused = timerState.matches("paused");
    const pauseTimer = useCallback(
      () => sendTimerState("PAUSE"),
      [sendTimerState]
    );
    const stopTimer = useCallback(
      () => sendTimerState("STOP"),
      [sendTimerState]
    );
    const playTimer = useCallback(
      () => sendTimerState("PLAY"),
      [sendTimerState]
    );
    const restartTimer = useCallback(
      () => sendTimerState("RESTART"),
      [sendTimerState]
    );
    const timeInStateMachine = timerState?.context?.time;
    useEffect(() => {
      sendTimerState({
        type: "UPDATE_TIME",
        data: {
          time: time,
        },
      });
    }, [time, sendTimerState]);
    useEffect(() => {
      setTime(timeInStateMachine);
    }, [setTime, timeInStateMachine]);
    useEffect(() => {
      sendTimerState({
        type: "UPDATE_ORIGINAL_TIME",
        data: {
          originalTime: originalTime,
        },
      });
    }, [originalTime, sendTimerState]);
    useEffect(() => {
      if (isPaused) {
        setStatus("Paused");
      } else if (isPlaying) {
        setStatus("In Progress");
      } else if (isCompleted) {
        setStatus("Done");
      } else {
        setStatus("Idle");
      }
    }, [isPlaying, isCompleted, isPaused, setStatus]);
    return (
      <TimerListItemActions
        isPlaying={isPlaying}
        isCompleted={isCompleted}
        pauseTimer={pauseTimer}
        stopTimer={stopTimer}
        playTimer={playTimer}
        restartTimer={restartTimer}
      />
    );
  }
);
