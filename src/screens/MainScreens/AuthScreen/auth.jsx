import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, SafeAreaView, Button} from 'react-native';
import {auth} from "../../../firebase/firebaseConfig";
import {signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import ScreenHeader from "../../../components/ScreenHeader";
import {ButtonGroup} from "react-native-elements";
import {heightPercentageToDP, widthPercentageToDP as wp, widthPercentageToDP} from "react-native-responsive-screen";

const Auth = ({theme, isDarkMode, user, navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginForm, setIsLoginForm] = useState(false);
    const {colors_dark, colors_light} = theme;
    const backColor = isDarkMode ? theme.neutral.ntrl90 : theme.neutral.ntrl20;
    const bgColor = isDarkMode ? colors_dark.bg : colors_light.bg;
    const textColor = isDarkMode ? colors_dark.text : colors_light.text;

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // User signed in successfully
                console.log('User Signed In');
                console.log(user);
                navigation.goBack();
            })
            .catch((error) => {
                // Handle sign-in error
                console.log('Sign-in error:', error);
            });
    };

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // User registered successfully
                console.log('User Registered');
                console.log(user);
                navigation.goBack();
            })
            .catch((error) => {
                // Handle registration error
                console.log('Registration error:', error);
            });
    };

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // User registered successfully
            console.log('User Logged Out');
            console.log(user);
            navigation.goBack();
        })
            .catch((error) => {
                // Handle registration error
                console.log('LogOut error:', error);
            });
    }

    return (
        <View style={{flex: 1}}>
            <ScreenHeader theme={theme} isDarkMode={isDarkMode} user={user} page={'auth'} navigation={navigation}/>
            <View style={{flex: 1, backgroundColor: backColor}}>
                <View style={{
                    flexDirection: 'row',
                    height: 48,
                    alignItems: 'center',
                    backgroundColor: bgColor,
                    paddingHorizontal: wp(5)
                }}>
                    <TouchableOpacity style={{height: 48, justifyContent: 'center', paddingEnd: wp(2.5)}}>
                        <Text style={{fontFamily: 'Montserrat-Medium', color: textColor}}>Вход</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 48, justifyContent: 'center', paddingStart: wp(2.5)}}>
                        <Text style={{fontFamily: 'Montserrat-Medium', color: textColor}}>Регистрация</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                    <TouchableOpacity onPress={handleSignIn}>
                        <Text style={{color: textColor}}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSignUp}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogOut}>
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Auth;