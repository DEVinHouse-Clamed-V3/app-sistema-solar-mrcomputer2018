import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, View } from 'react-native';
import { styles } from './styles.js';

import Header from './src/components/Header';
import Planet from './src/components/Planet';
import {planetas} from './planeta.js';

export default function App() {
  
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Header />

            <FlatList>
                data={planetas}
                renderItem={({ item }) => (
                    <Planet data={item} />
                )}
                keyExtractor={item => item.id}
            </FlatList>
            
            {/* <ScrollView>
                {planetas && planetas.map((data) => (
                    <Planet key={data.id} data={data} />
                ))}
            </ScrollView> */}
        </View>
    );
}
