import React, { useState } from 'react';
import { Animated, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Dia1509 = () => {

    const valores = [57.92, 29.29, 80.87, 34.69, 64.97];

    const [altura0] = useState(new Animated.Value(0));
    const [altura1] = useState(new Animated.Value(0));
    const [altura2] = useState(new Animated.Value(0));
    const [altura3] = useState(new Animated.Value(0));
    const [altura4] = useState(new Animated.Value(0));

    const [opacidade0] = useState(new Animated.Value(0));
    const [opacidade1] = useState(new Animated.Value(0));
    const [opacidade2] = useState(new Animated.Value(0));
    const [opacidade3] = useState(new Animated.Value(0));
    const [opacidade4] = useState(new Animated.Value(0));

    const gerarGrafico = () => {
        Animated.parallel([
            Animated.timing(altura0, {toValue:valores[0], duration:2000}),
            Animated.timing(altura1, {toValue:valores[1], duration:2000}),
            Animated.timing(altura2, {toValue:valores[2], duration:2000}),
            Animated.timing(altura3, {toValue:valores[3], duration:2000}),
            Animated.timing(altura4, {toValue:valores[4], duration:2000})
        ]).start();
        Animated.parallel([
            Animated.timing(opacidade0, {toValue:valores[0], duration:5000, delay:2000}),
            Animated.timing(opacidade1, {toValue:valores[1], duration:5000, delay:2000}),
            Animated.timing(opacidade2, {toValue:valores[2], duration:5000, delay:2000}),
            Animated.timing(opacidade3, {toValue:valores[3], duration:5000, delay:2000}),
            Animated.timing(opacidade4, {toValue:valores[4], duration:5000, delay:2000})
        ]).start();
    }

    return (
        <View style={styles.container}>
            <Text 
                style={styles.text}> Boletim Epidemiológico {'\n'} 15 de setembro de 2021</Text>
            <View 
                style={styles.viewGraficos}>
                <Animated.View
                    style={[styles.viewAnimadas, {height:altura0, backgroundColor:'#DF8021'}]}>
                    <Animated.Text style={[styles.textAnimados, {opacity:opacidade0}]}>{valores[0]}%</Animated.Text>
                </Animated.View>

                <Animated.View
                    style={[styles.viewAnimadas, {height:altura1, backgroundColor:'#44AA8F'}]}>
                    <Animated.Text style={[styles.textAnimados, {opacity:opacidade1}]}>{valores[1]}%</Animated.Text>
                </Animated.View>

                <Animated.View
                    style={[styles.viewAnimadas, {height:altura2, backgroundColor:'#AA5344'}]}>
                    <Animated.Text style={[styles.textAnimados, {opacity:opacidade2}]}>{valores[2]}%</Animated.Text>
                </Animated.View> 

                <Animated.View
                    style={[styles.viewAnimadas, {height:altura3, backgroundColor:'#7c5d9a'}]}>
                    <Animated.Text style={[styles.textAnimados, {opacity:opacidade3}]}>{valores[3]}%</Animated.Text>
                </Animated.View>  

                <Animated.View
                    style={[styles.viewAnimadas, {height:altura4, backgroundColor:'#345fd0'}]}>
                    <Animated.Text style={[styles.textAnimados, {opacity:opacidade4}]}>{valores[4]}%</Animated.Text>
                </Animated.View>      
            </View>
            <View style={styles.viewBotoes}>
                <TouchableOpacity
                    style={styles.botoes}
                    onPress={gerarGrafico}
                >
                <Text 
                    style={{fontWeight:'bold', fontSize:12, margin: 2}}>Gerar gráfico</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Dia1509;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#F6F2EE',
        alignItems: 'center',
        marginBottom: -40,
        marginTop: 20,
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      alignItems: 'center',
      marginBottom: -20,
    },
    viewGraficos: {
      flex: 0.5,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    viewAnimadas: {
      width: 40,
      margin: 2, 
      alignItems: 'center',
    },
    viewTextos: {
      fontWeight: 'bold', 
      fontSize: 10,
    },
    viewBotoes: {
        margin: 4,
    }, 
    botoes: {
      backgroundColor: '#DDDDDD',
      padding: 4,
      alignItems: 'center',
    },
    textAnimados: {
        fontWeight: 'bold',
        fontSize: 9,
        margin: 2
    }
  });