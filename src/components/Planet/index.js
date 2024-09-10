import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export default function Planet({ data }) {

    const { nome, img, velocidadeOrbitalMediaKmS, quantidadeSatelites, areaSuperficieKm2, periodoRotacaoDias } = data;

    return (
        <View style={styles.card}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>
                    {nome}
                </Text>

                <Image style={styles.image} source={{ uri: img }} />
            </View>

            <View style={styles.informations}>
                <Text style={styles.description}>Velocidade Orbital Média</Text>
                <Text style={styles.value}>{velocidadeOrbitalMediaKmS} km/s</Text>
            </View>

            <View style={styles.informations}>
                <Text style={styles.description}>Satélites</Text>
                <Text style={styles.value}>{quantidadeSatelites}</Text>
            </View>

            <View style={styles.informations}>
                <Text style={styles.description}>Área da Superfície</Text>
                <Text style={styles.value}>{areaSuperficieKm2} km²</Text>
            </View>

            <View style={styles.informations}>
                <Text style={styles.description}>Período de Rotação</Text>
                <Text style={styles.value}>{periodoRotacaoDias} d</Text>
            </View>
        </View>
    );
};
