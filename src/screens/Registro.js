import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { auth, database } from '../config/firebase'; // Asegúrate de importar correctamente
import Button from '../components/Button';
import InputText from '../components/InputText';
import { useNavigation } from '@react-navigation/native';


export default function Registro() {
    //Datos del registro
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    //Navegavilidad
    const navigation = useNavigation();

    //Registramos
    const Registrar = async () => {
        try {
            //Validamos los campos
            if (!correo || !clave || !nombre || !telefono) {
                Alert.alert('Campos Incompletos', 'Por favor completa todos los campos.');
                return;
            } else {
                //Creamos la coleccion en firebase Auth
                const userCredential = await createUserWithEmailAndPassword(auth, correo, clave);
                const userId = userCredential.user.uid;
                //Guardamos los datos
                await setDoc(doc(collection(database, 'users'), userId), {
                    nombre, telefono, correo
                })
                Alert.alert('Registro exitoso', 'El usuario ha sido registrado correctamente.');
                navigation.navigate('Login');
            }

        } catch (error) {
            console.error('Error al registrar:', error);
            Alert.alert('Error', 'Hubo un problema al registrar. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Registro de la aplicación</Text>
            <View style={styles.row}>
                <View style={styles.column}>
                    <InputText
                        placeHolder={"Ingresa tu nombre"}
                        valor={nombre}
                        setTextChange={setNombre} />
                    <InputText
                        placeHolder={"Teléfono"}
                        contra={false}
                        valor={telefono}
                        setTextChange={setTelefono} />

                </View>
                <View style={styles.column}>
                    <InputText
                        placeHolder={"Ingresa tu correo electrónico"}
                        valor={correo}
                        setTextChange={setCorreo} />
                    <InputText
                        placeHolder={"Ingresa una clave"}
                        contra={true}
                        valor={clave}
                        setTextChange={setClave} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Button color={"Negro"}
                        textoBoton={"Registrarse"}
                        accionBoton={Registrar}
                    />
                </View>
                <View style={styles.column}>
                    <Button color={"Negro"}
                        textoBoton={"Iniciar sesión"}
                        accionBoton={() => navigation.navigate('Login')}
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: '#F5853F',
        fontWeight: '800',
        fontSize: 30,
        marginBottom: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    column: {
        flex: 1,
        marginHorizontal: 10,
    },
    button: {
        marginTop: 30,
    },
});
