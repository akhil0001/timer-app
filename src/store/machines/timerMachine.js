import { assign, createMachine, send } from "xstate";

export const TimerMachine = createMachine(
  {
    id: "timer-machine",
    context: {
      time: 0,
      completed: false,
      originalTime: 0,
    },
    initial: "idle",
    states: {
      idle: {
        on: {
          PLAY: {
            target: "playing",
          },
          RESTART: {
            target: "playing",
            actions: ["setTimeToOriginalTime", "markTimerIncomplete"],
          },
        },
      },
      playing: {
        invoke: {
          src: "runInterval",
        },
        on: {
          PAUSE: {
            target: "paused",
          },
          DECREMENT_TIME: [
            {
              cond: (context) => context.time <= 0,
              actions: send("STOP"),
            },
            {
              actions: ["decrementTime"],
            },
          ],
          STOP: {
            target: "idle",
            actions: ["markTimerComplete", "setTimeToOriginalTime"],
          },
        },
      },
      paused: {
        on: {
          PLAY: {
            target: "playing",
          },
          STOP: {
            target: "idle",
          },
        },
      },
    },
    on: {
      UPDATE_TIME: {
        actions: ["updateTime"],
      },
      UPDATE_ORIGINAL_TIME: {
        actions: ["updateOriginalTime"],
      },
    },
  },
  {
    actions: {
      decrementTime: assign({
        time: (context) => context.time - 1,
      }),
      updateTime: assign({
        time: (_, event) => event?.data?.time,
      }),
      markTimerComplete: assign({
        completed: true,
      }),
      setTimeToOriginalTime: assign({
        time: (context) => context.originalTime,
      }),
      markTimerIncomplete: assign({
        completed: false,
      }),
      updateOriginalTime: assign({
        originalTime: (_, event) => event?.data?.originalTime,
      }),
    },
    services: {
      runInterval: () => (callback) => {
        const intervalCb = () => {
          callback("DECREMENT_TIME");
        };
        const intervalId = setInterval(intervalCb, 1000);
        return () => clearInterval(intervalId);
      },
    },
  }
);
