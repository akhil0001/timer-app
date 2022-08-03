import { useAtom } from "jotai";
import { memo } from "react";
import { TimerListItem } from "../../components/TimerListItem/TimerListItem";

export const TimerListItemContainer = memo(({ timerListItemAtom }) => {
  const [timerListItem] = useAtom(timerListItemAtom);
  const { title, time, originalTime, status } = timerListItem;
  return (
    <TimerListItem
      titleAtom={title}
      timeAtom={time}
      originalTimeAtom={originalTime}
      statusAtom={status}
    />
  );
});

TimerListItemContainer.displayName = "TimerListItemContainer";
