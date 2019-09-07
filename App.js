import React from 'react';
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

import Opacity from './src/1. Opacity';
import TranslatePosition from './src/2. Translate_Position';
import Scale from './src/3. Scale';
import WidthHeight from './src/4. Width_Height';
import Absolute from './src/5. Absolute';
import BackgroundInterpolation from './src/6. Background_Interpolation';
import Rotation from './src/7. Rotation';
import Easing from './src/8. Easing';
import Spring from './src/9. Spring';

const AnimationScreen = [
  { title: '1. Opacity', Component: Opacity },
  { title: '2. Translate Position', Component: TranslatePosition },
  { title: '3. Scale', Component: Scale },
  { title: '4. Width and Height', Component: WidthHeight },
  { title: '5. Absolute', Component: Absolute },
  { title: '6. Background Interpolation', Component: BackgroundInterpolation },
  { title: '7. Rotation', Component: Rotation },
  { title: '8. Easing', Component: Easing },
  { title: '9. Spring', Component: Spring },
];

export default function App() {
  const [animationScreenIdx, setAnimationScreenIdx] = React.useState(AnimationScreen.length);
  const Comp = animationScreenIdx && AnimationScreen[animationScreenIdx - 1].Component;

  const body = animationScreenIdx ? (
    <>
      <Button title="Go back" onPress={() => setAnimationScreenIdx(null)} />
      <Comp />
    </>
  ) : (
    <>
      {AnimationScreen.map((screen, idx) => (
        <Text key={screen.title} onPress={() => setAnimationScreenIdx(idx + 1)}>
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
