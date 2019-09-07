import React from 'react';
import {
  Stylesheet,
  View,
  Animated,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function Event() {
  const [animation, setAnimation] = React.useState(new Animated.Value(0));

  const backgroundInterpolate = animation.interpolate({
    inputRange: [0, 3000],
    outputRange: ['red', 'blue'],
  });
  
  const animStyles = {
    backgroundColor: backgroundInterpolate,
  }

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: animation } } },
        ])}>
        <Animated.View style={[styles.box, animStyles]} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'red',
  },
  box: {
    height: "100%",
    width: 600,
  }
});
