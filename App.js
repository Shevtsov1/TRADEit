import React, {useEffect, useState} from 'react';
import {useFonts} from 'expo-font';
import AppNavigator from './src/navigation/Navigator';
import mainTheme from './assets/themes/mainTheme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActivityIndicator, Image, StatusBar, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as NavigationBar from "expo-navigation-bar";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {onAuthStateChanged, signInAnonymously} from 'firebase/auth';
import {auth} from './src/firebase/firebaseConfig';
import { Asset } from 'expo-asset';

const App = () => {
    const [user, setUser] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor(isDarkMode ? mainTheme.colors_dark.bg : mainTheme.colors_light.bg);
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content', true);

    NavigationBar.setBackgroundColorAsync(isDarkMode ? mainTheme.colors_dark.bg : mainTheme.colors_light.bg).then();
    NavigationBar.setButtonStyleAsync(isDarkMode ? 'light' : 'dark').then();

    // Загрузка шрифтов
    let [fontsLoaded] = useFonts({
        'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
    });

    async function loadImages() {
        const images = [
            require('./assets/images/logo/logo-dark.png'),
            require('./assets/images/logo/logo-light.png'),
            require('./assets/images/bottomTab/add.png'),
            require('./assets/images/bottomTab/addFilled.png'),
            require('./assets/images/bottomTab/home.png'),
            require('./assets/images/bottomTab/homeFilled.png'),
            require('./assets/images/bottomTab/catalog.png'),
            require('./assets/images/bottomTab/catalogFilled.png'),
            require('./assets/images/bottomTab/favorite.png'),
            require('./assets/images/bottomTab/favoriteFilled.png'),
            require('./assets/images/bottomTab/profile.png'),
            require('./assets/images/bottomTab/profileFilled.png'),
            require('./assets/images/screens/profile/incognito.png'),
            require('./assets/images/screens/profile/right-arrow.png'),
            require('./assets/images/screens/profile/logout-filled.png'),
            require('./assets/images/screens/profile/settings.png'),
        ];

        const cacheImages = images.map((image) => {
            return Asset.fromModule(image).downloadAsync();
        });

        return Promise.all(cacheImages);
    }

    // Загрузка сохраненной темы при запуске приложения
    const loadTheme = async () => {
        try {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme) {
                const theme = JSON.parse(savedTheme);
                setIsDarkMode(!theme.isDarkMode);
            }
        } catch (error) {
            console.error('Error loading theme:', error);
        }
    };

    // Сохранение темы при изменении режима
    const saveTheme = async () => {
        try {
            const theme = {isDarkMode};
            await AsyncStorage.setItem('theme', JSON.stringify(theme));
        } catch (error) {
            console.error('Error saving theme:', error);
        }
    };

    useEffect(() => {
        const initializeApp = async () => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    // Пользователь уже зарегистрирован
                    setUser(user);
                } else {
                    // Пользователь не зарегистрирован, выполнение анонимной регистрации
                    const registerAnonymousUser = async () => {
                        try {
                            await signInAnonymously(auth);
                            const anonymousUser = auth.currentUser;
                            setUser(anonymousUser);
                            console.log("Anonymous user logged in");
                        } catch (error) {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log("Error while logging in anonymously:", errorCode, errorMessage);
                        }
                    };

                    registerAnonymousUser().then();
                }
            });

            await loadTheme();
            await saveTheme();
            await loadImages();
            setInitializing(false);
            return () => {
                unsubscribe();
            };
        };

        initializeApp().then();
    }, []);


        return (
            <SafeAreaProvider>
                {initializing || !fontsLoaded ? (
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: isDarkMode ? mainTheme.colors_dark.bg : mainTheme.colors_light.bg
                    }}>
                        <View style={{
                            alignItems: "center",
                            marginBottom: 20
                        }}>
                            {isDarkMode ? (
                                <Image
                                    source={require('./assets/images/logo/logo-dark.png')}
                                    style={{width: wp('70%')}}
                                    resizeMode={"contain"}
                                />
                            ) : (
                                <Image
                                    source={require('./assets/images/logo/logo-light.png')}
                                    style={{width: wp('70%')}}
                                    resizeMode={"contain"}
                                />
                            )}
                        </View>
                        <ActivityIndicator
                            size={75}
                            color={isDarkMode ? mainTheme.colors_dark.accent : mainTheme.colors_light.accent}
                        />
                    </View>
                ) : (
                    <AppNavigator user={user} theme={mainTheme} isDarkMode={isDarkMode} setInitializing={setInitializing}/>
                )}
            </SafeAreaProvider>
        );
};

export default App;