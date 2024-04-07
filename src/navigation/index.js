import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DetailCategoryPage, HomePage, LoginScreen, ProfilePage } from '../pages/index';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarinactiveTintColor: 'lightgray',

            tabBarStyle: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                elevation: 0,
            },

            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '600'
            },

            tabBarIconStyle: {
                marginBottom: -3,
            },
            tabBarShowLabel: true,
        })}>

            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator >
    )
}


const Main = () => {
    return (
        // <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{}}>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Category" component={DetailCategoryPage} options={{ headerShown: true, animation: "ios", headerTitleAlign: 'center', headerTitle: 'Category' }} />
        </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});