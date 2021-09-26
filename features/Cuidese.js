import React, { useState } from 'react';
import { Animated, StyleSheet, View, Image } from 'react-native';

const Cuidese = () => {

    const [width] = useState(new Animated.Value(160));
    const [height] = useState(new Animated.Value(60));

    Animated.loop(
          Animated.timing(width, {toValue:180, duration:1000}),
          Animated.timing(height, {toValue:80, duration:1000}),
      ).start();

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../images/cuide-se2.jpg')}
                style={{width:width, height:height}}
            />            
        </View>
    )
}
export default Cuidese;

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: '#F6F2EE',
        alignItems: 'center',
        marginTop: 13,
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      alignItems: 'center',
    },
  });