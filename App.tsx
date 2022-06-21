import React, { useCallback, useEffect, useState } from "react";

import { View, Text } from "react-native";

import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import {
  Roboto_400Regular,
  Roboto_400Regular_Italic,
} from "@expo-google-fonts/roboto";
import {
  RedHatDisplay_400Regular,
  RedHatDisplay_700Bold,
} from "@expo-google-fonts/red-hat-display";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Roboto_400Regular,
          Roboto_400Regular_Italic,
          RedHatDisplay_400Regular,
          RedHatDisplay_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onLayout={onLayoutRootView}
      >
        <Text style={{ fontSize: 40, fontFamily: theme.fonts.regular }}>
          fjaklsdfkladsjklfdsj
        </Text>
      </View>
    </ThemeProvider>
  );
}
