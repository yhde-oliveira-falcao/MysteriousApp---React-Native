import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import { registerAsset } from 'react-native-web/dist/cjs/modules/AssetRegistry';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/bp-miller-S0srLldOQ44-unsplash.jpg")}>

            <View style ={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/clipart232954.png')} />
                <Text></Text>
            </View>

            
            <View style={styles.loginButton}>
           
            </View>

            <View style={styles.registerButton}>
            <Text>Register</Text>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#ffff"
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4"
    },
    logo: {
        width: 100,
        height: 100,
        
    },
    logoContainer : {
        position: "absolute",
        top: 50,
        alignItems: "center"
    }
})

export default WelcomeScreen;