import React from 'react';
import {
  Stylesheet,
  View,
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

export default function WidthHeight() {
  const [animation, setAnimation] = React.useState(new Animated.Value(150));
  
  function startAnimation() {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
    }).start();
  }

  const animatedStyles = {
    height: animation,
    width: animation,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis commodi tempora fuga saepe quibusdam mollitia nihil inventore nam harum maxime, qui, itaque dolore hic. Nemo a dignissimos amet reprehenderit quam?</Text>
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
    backgroundColor: 'blue',
    alignItems: 'center',
  }
});
