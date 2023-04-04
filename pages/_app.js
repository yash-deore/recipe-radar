import { AppHeader } from "@/components/app-header";
import { SessionProvider } from "next-auth/react";

import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
// import { NotificationsProvider } from "@mantine/notifications";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  function toggleColorScheme(value) {
    return setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  }

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <SessionProvider session={session}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <AppHeader />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </SessionProvider>
  );
}
