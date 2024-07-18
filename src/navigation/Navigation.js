import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importación del stack navigator de React Navigation
import { NavigationContainer } from '@react-navigation/native'; // Importación del contenedor de navegación de React Navigation

// Importación de las diferentes pantallas del proyecto
import Home from '../screens/Home';
import Add from '../screens/Add';
import Registro from '../screens/Registro';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator(); // Creación de un stack navigator

const Navigation = () => {
    return (
        <NavigationContainer> {/* Contenedor principal de navegación */}
            <Stack.Navigator> {/* Navigator del stack */}
                <Stack.Screen name="Registro" component={Registro} options={{ title: 'Home' }} /> {/* Pantalla de registro con título personalizado */}
                <Stack.Screen name="Login" component={Login} /> {/* Pantalla de inicio de sesión */}
                <Stack.Screen name="Home" component={Home} /> {/* Pantalla principal del home */}
                <Stack.Screen name="Add" component={Add} options={{ presentation: 'modal', title: 'Agregar productos' }} /> {/* Pantalla para agregar productos con configuración de presentación modal y título personalizado */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
