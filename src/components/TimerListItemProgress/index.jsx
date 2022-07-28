import { Progress } from "@mantine/core";
import { useAtom } from "jotai";
import { useMemo } from "react";

export const TimerListItemProgress = ({ timeAtom, originalTimeAtom }) => {
  const [time] = useAtom(timeAtom);
  const [originalTime] = useAtom(originalTimeAtom);

  const elapsedTime = originalTime - time;
  const percentage = 100 - (elapsedTime / originalTime) * 100;
  const color = useMemo(() => {
    if (percentage < 40) {
      return "orange";
    } else if (percentage < 80) {
      return "cyan";
    } else if (percentage <= 100) {
      return "green";
    }
  }, [percentage]);

  return <Progress color={color} radius="md" size="sm" value={percentage} />;
};
