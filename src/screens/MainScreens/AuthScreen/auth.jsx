import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {auth} from "../../../firebase/firebaseConfig";
import {signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"

const Auth = ({user, navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
                <Text>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogOut}>
                <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Auth;