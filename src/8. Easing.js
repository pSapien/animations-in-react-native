import React from 'react';
import {
  Stylesheet,
  View,
  Animated,
  StyleSheet,
  Text,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Easing() {
  const [animation, setAnimation] = React.useState(new Animated.Value(0));
  
  function startAnimation() {
    Animated.spring(animation, {
      toValue: 300,
      duration: 500,
      // easing: Easing.back(5),
      // easing: Easing.bounce,
      // easing: Easing.elastic(3),
      // easing: Easing.bezier(.06, 1, .86, .23),
    }).start();
  }

  const animStyles = {
    transform: [{ translateY: animation }],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animStyles]}>
          <Text>Just a ball</Text>
        </Animated.View>
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
    borderWidth: 1,
    borderRadius: 75,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
