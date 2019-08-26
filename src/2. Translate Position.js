import React from 'react';
import {
  Stylesheet,
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Opacity() {
  const [animation, setAnimation] = React.useState(new Animated.Value(0));
  
  function startAnimation() {
    Animated.timing(animation, {
      toValue: -300,
      duration: 1500,
    }).start(() => { 
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
      }).start();
    });
  }

  const animatedStyles = {
    transform: [
      { translateY: animation },
    ],
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
