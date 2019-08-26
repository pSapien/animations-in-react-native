import React from 'react';
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

import Opacity from './src/1. Opacity';

const AnimationScreen = [{}, { title: '1. Opacity', Component: Opacity }];

export default function App() {
  const [animationScreenIdx, setAnimationScreenIdx] = React.useState(null);
  const Comp = animationScreenIdx && AnimationScreen[animationScreenIdx].Component;

  const body = animationScreenIdx ? (
    <>
      <Button title="Go back" onPress={() => setAnimationScreenIdx(null)} />
      <Comp />
    </>
  ) : (
    <>
      {AnimationScreen.map((screen, idx) => (
        <Text key={screen.title} onPress={() => setAnimationScreenIdx(idx)}>
          {screen.title}
        </Text>
      ))}
    </>
  );

  return <SafeAreaView style={styles.container}>{body}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
