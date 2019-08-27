import React from 'react';
import {
  Stylesheet,
  View,
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Absolute() {
  const [animation, setAnimation] = React.useState(new Animated.Value(0));
  
  function startAnimation() {
    Animated.timing(animation, {
      toValue: 100,
      duration: 1500
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 3000,
      }).start();
    });
  }

  const animatedStyles = {
    top: animation,
    right: animation,
    left: animation,
  };

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
    position: 'absolute',
    width: 150,
    height: 150,
    backgroundColor: 'blue',
  }
});
