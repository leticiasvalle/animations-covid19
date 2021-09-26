import React, { useState } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';

const Covid = () => { 

  const [rotacao] = useState(new Animated.Value(0));
  Animated.timing(rotacao, {toValue:90, duration:500}).start();

  const rotacaoInterpolada = rotacao.interpolate({
    inputRange: [0, 90],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.text, {transform:[{rotate:rotacaoInterpolada}]}]}
    >COVID-19 JUIZ DE FORA</Animated.View>
    </View>
  );
}
export default Covid;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: '#F6F2EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 14,
  }
});