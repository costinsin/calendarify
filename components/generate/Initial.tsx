import { Center, Stack } from "@mantine/core";
import { CSSProperties, Dispatch } from "react";
import CardButton from "../CardButton";
import { Action } from "../GeneratePage";

export default function Initial({
  dispatch,
  styles,
}: {
  dispatch: Dispatch<Action>;
  styles?: CSSProperties;
}) {
  return (
    <Center style={{ ...styles, height: "100%" }}>
      <Stack>
        <CardButton
          title="Create a new schedule"
          description="TODO"
          badge="recommended"
          onClick={() => dispatch("template")}
        />

        <CardButton
          title="Edit an existing schedule"
          description="TODO"
          onClick={() => dispatch("editor")}
        />
      </Stack>
    </Center>
  );
}
