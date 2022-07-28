import { atom, useAtom } from "jotai";
import { timerListAtom } from "../../store/atoms";
import { AddNewTimerListItemButton } from "../../components/AddNewTimerListItemButton/AddNewTimerListItemButton";

export const AddNewTimerListItemButtonContainer = () => {
  const [timerListItems, setTimerListItems] = useAtom(timerListAtom);

  const addTimerListItem = () => {
    const timerListItemAtom = atom({
      title: atom(`Timer ${timerListItems.length + 1}`),
      createdAt: Date.now(),
      time: atom(0),
      originalTime: atom(0),
      status: atom("idle"),
    });
    setTimerListItems((prev) => [...prev, timerListItemAtom]);
  };

  return <AddNewTimerListItemButton onClick={addTimerListItem} />;
};
