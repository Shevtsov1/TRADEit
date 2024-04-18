import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from "../screens/MainScreens/ProfileScreen/profile";
import Auth from "../screens/MainScreens/AuthScreen/auth";

const Stack = createNativeStackNavigator();

export const ProfileStackNavigator = ({user, theme, isDarkMode, setInitializing, setUser}) => (
    <Stack.Navigator
        initialRouteName={'Profile'}
        screenOptions={{
            headerStyle: {
                backgroundColor: isDarkMode ? theme.colors_dark.bg : theme.colors_light.bg,
            },
            headerTitleStyle: {
                color: isDarkMode ? theme.colors_dark.text : theme.colors_light.text,
            },
            headerTitleAlign: 'center',
            headerTintColor: isDarkMode ? theme.colors_dark.text : theme.colors_light.text,
        }}>
        <Stack.Screen name="Profile" options={{title: 'Профиль', headerShown: false}} >{(props) =>
            <Profile {...props} user={user} theme={theme} isDarkMode={isDarkMode} setUser={setUser}/>}</Stack.Screen>
        <Stack.Screen name="Auth" options={{title: 'Вход и регистрация', headerShown: false}}>{(props) =>
            <Auth {...props} user={user} theme={theme} isDarkMode={isDarkMode} setInitializing={setInitializing} setUser={setUser}/>}</Stack.Screen>
    </Stack.Navigator>
);