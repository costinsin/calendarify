"use client";

import { Button, Center, Stack, Text, Transition } from "@mantine/core";
import { useReducer, useState } from "react";
import CardButton from "./CardButton";
import Initial from "./generate/Initial";
import ScheduleEditor from "./generate/ScheduleEditor";
import TemplateSelection from "./generate/TemplateSelection";

type State = string;

export type Action = string;

function reducer(state: State, action: Action) {
  if (action === "reset") {
    return "initial";
  }

  switch (state) {
    case "initial":
      switch (action) {
        case "template":
          return "templateSelection";
        case "editor":
          return "scheduleEditor";
      }
    case "templateSelection":
      if (action === "editor") {
        return "scheduleEditor";
      }
    case "editor":
      if (action === "generate") {
        return "generated";
      }
  }

  return "initial";
}

const transition = {
  in: { opacity: 1, transform: "translateX(0)" },
  out: { opacity: 0, transform: "translateX(-200px)" },
  common: { transformOrigin: "top" },
  transitionProperty: "transform, opacity",
};

export default function GeneratePage() {
  const [state, dispatch] = useReducer(reducer, "initial");
  const [mountedNow, setMountedNow] = useState("initial");
  const canBeMounted = (state: string) =>
    mountedNow === "" || mountedNow === state;

  return (
    <>
      <Text>{"Mounted now: " + mountedNow}</Text>
      <Text>{"State: " + state}</Text>
      <Button onClick={() => dispatch("reset")}>Reset</Button>
      <Transition
        mounted={state === "initial" && canBeMounted("initial")}
        transition={transition}
        duration={400}
        timingFunction="ease"
        onEnter={() => setMountedNow("initial")}
        onExited={() => setMountedNow("")}
      >
        {(styles) => <Initial styles={styles} dispatch={dispatch} />}
      </Transition>
      <Transition
        mounted={
          state === "templateSelection" && canBeMounted("templateSelection")
        }
        transition={transition}
        duration={400}
        timingFunction="ease"
        onEnter={() => setMountedNow("templateSelection")}
        onExited={() => setMountedNow("")}
      >
        {(styles) => <TemplateSelection styles={styles} dispatch={dispatch} />}
      </Transition>
      <Transition
        mounted={state === "scheduleEditor" && canBeMounted("scheduleEditor")}
        transition={transition}
        duration={400}
        timingFunction="ease"
        onEnter={() => setMountedNow("scheduleEditor")}
        onExited={() => setMountedNow("")}
      >
        {(styles) => <ScheduleEditor styles={styles} dispatch={dispatch} />}
      </Transition>
    </>
  );
}
