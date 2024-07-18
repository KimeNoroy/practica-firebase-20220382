import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ textoBoton, accionBoton, color }) {
    // Objeto con los colores disponibles
    const Colores = {
        Negro: '#000', // Color negro por defecto
    };

    // Determinar el color del botón
    const buttonColor = Colores[color] || color; // Si el color proporcionado no está en Colores, se usa el color directamente

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor, borderColor: buttonColor }]} onPress={accionBoton}>
            <Text style={styles.buttonText}>{textoBoton}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        width: 185,
        borderRadius: 5,
        padding: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: "#FFF", // Color blanco para el texto del botón
        fontWeight: '800',
        fontSize: 15,
    }
});
