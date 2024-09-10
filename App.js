import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { styles } from './styles.js';

import Header from './src/components/Header';
import {planetas} from './planeta.js';

export default function App() {
  
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Header />
            
            <ScrollView>
                {/* Aqui vai o conteúdo da aplicação */}
                {planetas.map((planeta) => {
                    return (
                        <View style={ styles.card }>
                            <View style={ styles.titleArea }>
                                <Text 
                                style={ styles.title }
                                key={planeta.id}>
                                    {planeta.nome}
                                </Text>

                                <Image
                                style={ styles.image }
                                source={{uri: planeta.img}}
                                />
                            </View>

                            <View style={ styles.informations }>
                                <Text style={ styles.description }>
                                    velocidade Orbital Media
                                </Text>

                                <Text style={ styles.value }>
                                    {planeta.velocidadeOrbitalMediaKmS} km/s
                                </Text>
                            </View>

                            <View style={ styles.informations }>
                                <Text style={ styles.description }>Satelites</Text>

                                <Text style={ styles.value }>
                                    {planeta.quantidadeSatelites}
                                </Text>
                            </View>

                            <View style={ styles.informations }> 
                                <Text style={ styles.description }>
                                    Area da Superficie
                                </Text>

                                <Text style={ styles.value }>
                                    {planeta.areaSuperficieKm2} km2
                                </Text>
                            </View>

                            <View style={ styles.informations }>
                                <Text style={ styles.description }>
                                    Periodo Rotacao
                                </Text>

                                <Text style={ styles.value }>
                                    {planeta.periodoRotacaoDias} d
                                </Text>
                            </View>
                        </View>
                        
                    )
                })}
            </ScrollView>
        </View>
    );
}
