import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#fff',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d8d8d8',
        shadowColor: '#000',
        elevation: 2,
        width: '100%',
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageHeader: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
});