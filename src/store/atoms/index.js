import { atom } from "jotai";
import { atomWithMachine } from "jotai/xstate";
import { TimerMachine } from "../machines/timerMachine";

export const timerListAtom = atom([]);

export const timerMachineAtom = atomWithMachine(TimerMachine);
