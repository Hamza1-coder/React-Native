import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import * as Font from "expo-font";
import { AppLoading, Font } from "expo";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans_SemiCondensed-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [appIsReady, setAppIsReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const restartGameHandler = () => {
    setGuessRound(0);
    setUserNumber(null);
  }

  const gameOverHandler = numberOfrounds => {
    setGuessRound(numberOfrounds);
  }
  let content = <StartGameScreen onStartGame={startGameHandler} />
  if (userNumber && guessRound <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRound > 0) {
    content = <GameOver
      roundsNumber={guessRound}
      userNumber={userNumber}
      onGameRestart={restartGameHandler}
    />
  }
  return (
    <View style={styles.screen} onLayout={onLayoutRootView}>
      <Header title="Guess A Number 🧝‍♀️" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
