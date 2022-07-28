import { useAtom } from "jotai";
import { timerListAtom } from "../../store/atoms";
import { TimerListItemContainer } from "../TimerListItemContainer/TimerListItemContainer";

export const TimerListContainer = () => {
  const [timerListItems] = useAtom(timerListAtom);
  return (
    <>
      {timerListItems.map((timerListItemAtom) => (
        <TimerListItemContainer
          key={String(timerListItemAtom)}
          timerListItemAtom={timerListItemAtom}
        />
      ))}
    </>
  );
};
