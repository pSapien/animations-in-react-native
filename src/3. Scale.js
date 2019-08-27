import React from 'react';
import {
  Stylesheet,
  View,
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Scale() {
  const [animation, setAnimation] = React.useState(new Animated.Value(1));
  
  function startAnimation() {
    Animated.timing(animation, {
      toValue: -2,
      duration: 1500
    }).start();
  }

  const animatedStyles = {
    transform: [
      { scaleY: animation },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>Inside the box</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    alignItems: 'center',
  }
});
