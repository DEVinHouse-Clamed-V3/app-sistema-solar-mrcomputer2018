import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    titleArea: {
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    image: {
        width: 260,
        height: 260,
        margin: 10,
        borderRadius: 10,   
    },
    informations: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
    },
    description: {
        fontSize: 18,
        color: '#555',
    },
    value: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
});