import {View, Text, Image } from 'react-native';
import { styles } from './styles';

export default function Header() { 
    return (
        <View style={ styles.container }>
            <Text style={ styles. textHeader }>
                Vamos Explorar
            </Text>
            <Image 
                style={styles.imageHeader}
                source={require('../../../assets/image_header.png')}
            />
        </View>
    );  
}