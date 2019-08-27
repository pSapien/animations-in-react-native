import React from 'react';
import {
  Stylesheet,
  View,
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

export default function BackgroundInterpolation() {
  const [animation, setAnimation] = React.useState(new Animated.Value(0));
  
  function startAnimation() {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500
    }).start(() => { 
      Animated.timing(animation, {
        toValue: 0, 
        duration: 1500,
      }).start();
    });
  }

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)'],
  });

  const animatedStyles = {
    backgroundColor: boxInterpolation,
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    // backgroundColor: 'blue',
  }
});
