"use client";

import { Card, Group, Text, Badge, createStyles, Center } from "@mantine/core";
import { MouseEventHandler } from "react";

export default function CardButton({
  title,
  description,
  badge,
  onClick,
}: {
  title: string;
  description: string;
  badge?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  const useStyles = createStyles((theme) => ({
    "@keyframes borderHover": {
      "0%": {
        border: "2px solid black",
      },
      "100%": {
        border: "2px solid white",
      },
    },
    card: {
      width: "500px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      border: "1px solid black",
      transition: "border 200ms ease-out, transform 100ms ease-out",
      "&:hover": {
        border: "1px solid white",
      },
      "&:active": {
        transform: "translateX(10px)",
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      maxWidth: "350px",
    },
  }));

  const { classes } = useStyles();

  return (
    <Card radius="md" className={classes.card} onClick={onClick}>
      <Group className={classes.content}>
        <Group position="apart">
          <Text weight={500} style={{ userSelect: "none" }}>
            {title}
          </Text>
          {badge ? (
            <Badge color="green" variant="light" style={{ userSelect: "none" }}>
              {badge}
            </Badge>
          ) : (
            <></>
          )}
        </Group>

        <Text
          size="sm"
          color="dimmed"
          style={{
            wordWrap: "break-word",
            maxWidth: "350px",
            userSelect: "none",
          }}
        >
          {description}
        </Text>
      </Group>

      <Center>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-big-right"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
        </svg>
      </Center>
    </Card>
  );
}
