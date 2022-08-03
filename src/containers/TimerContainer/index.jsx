import { Stack } from "@mantine/core";
import { useAtom } from "jotai";
import { useState } from "react";
import { Timer } from "../../components/Timer/Timer";
import { TimerListItemProgress } from "../../components/TimerListItemProgress";
import { convertSecondsToHHMMSS } from "../../utils";

export const TimerContainer = ({ timeAtom, originalTimeAtom }) => {
  const [isEditable, setIsEditable] = useState(true);
  const [time, setTime] = useAtom(timeAtom);
  const [, setOriginalTime] = useAtom(originalTimeAtom);
  const onInputChange = (e) => {
    const val = e?.target?.value || 0;
    setTime(val);
    setOriginalTime(val);
  };

  const formattedTimeDisplay = convertSecondsToHHMMSS(time);

  return (
    <Stack>
      <Timer
        time={time}
        formattedTime={formattedTimeDisplay}
        setIsEditable={setIsEditable}
        isEditable={isEditable}
        onChange={onInputChange}
      />
      <TimerListItemProgress
        originalTimeAtom={originalTimeAtom}
        timeAtom={timeAtom}
      />
    </Stack>
  );
};
