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

export default function Spring() {
  const [animation, setAnimation] = React.useState(new Animated.Value(1));
  
  function startAnimation() {
    animation.addListener(({ value }) => console.log(value));
    // spring shoots value higher than 2 here. it's the property of spring.
    Animated.spring(animation, {
      toValue: 2,
      friction: 2, // causes the spring to slow down. higher the more it slows down.
      tension: 160, // adds energy to the spring. higher this value, the more springy.
    }).start(() => { 
      Animated.timing(animation, {
        toValue: 1,
      }).start();
    });
  }

  const animStyles = {
    transform: [{ scale: animation }],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animStyles]} />
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
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  }
});
