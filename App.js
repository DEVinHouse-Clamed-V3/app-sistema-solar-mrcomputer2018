import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, View, Text, TouchableOpacity, Animated } from 'react-native';
import { styles } from './styles.js';

import Header from './src/components/Header';
import Planet from './src/components/Planet';
import {planetas} from './planeta.js';

export default function App() {
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
    const animation = useRef(new Animated.Value(0)).current;  // Valor animado para controlar a posição

     // Função para animar a transição entre os planetas
     const slideAnimation = (direction) => {
        Animated.timing(animation, {
            toValue: direction * 300,  // Mover 300 pixels para a esquerda/direita
            duration: 300,  // Duração da animação
            useNativeDriver: true,  // Usa animação na thread nativa para performance
        }).start(() => {
            animation.setValue(0);  // Reseta o valor animado após a animação
        });
    };

    // Função para ir ao próximo planeta
    const nextPlanet = () => {
        if (currentPlanetIndex < planetas.length - 1) {
            slideAnimation(-1);  // Anima para a esquerda
            setTimeout(() => setCurrentPlanetIndex(currentPlanetIndex + 1), 300);  // Atualiza após a animação
        }
    };

    // Função para ir ao planeta anterior
    const previousPlanet = () => {
        if (currentPlanetIndex > 0) {
            slideAnimation(1);  // Anima para a direita
            setTimeout(() => setCurrentPlanetIndex(currentPlanetIndex - 1), 300);  // Atualiza após a animação
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Header />

            {/* Exibindo o planeta atual com animação */}
            <Animated.View style={{ transform: [{ translateX: animation }] }}>
                <Planet data={planetas[currentPlanetIndex]} />
            </Animated.View>

            {/* Botões para navegar entre os planetas */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={previousPlanet}>
                    <Text style={styles.buttonText}>Anterior</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={nextPlanet}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
            </View>

            {/* <FlatList>
                data={planetas}
                renderItem={({ item }) => (
                    <Planet data={item} />
                )}
                keyExtractor={item => item.id}
            </FlatList> */}
            
            {/* <ScrollView>
                {planetas && planetas.map((data) => (
                    <Planet key={data.id} data={data} />
                ))}
            </ScrollView> */}
        </View>
    );
}
