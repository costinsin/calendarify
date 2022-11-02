"use client";

import React from "react";
import { AppShell, MantineProvider, useMantineTheme } from "@mantine/core";
import HeaderComponent from "./HeaderComponent";

export default function AppComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useMantineTheme();

  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
      }}
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
    >
      <AppShell
        padding="md"
        header={<HeaderComponent />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </MantineProvider>
  );
}
