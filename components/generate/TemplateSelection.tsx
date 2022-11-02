import { Card, Center, Text } from "@mantine/core";
import { Dispatch, CSSProperties } from "react";
import { Action } from "../GeneratePage";

export default function TemplateSelection({
  dispatch,
  styles,
}: {
  dispatch: Dispatch<Action>;
  styles?: CSSProperties;
}) {
  return (
    <Center style={{ ...styles, height: "100%" }}>
      <Card>
        <Text>Template Selection</Text>
      </Card>
    </Center>
  );
}
