import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, StatusBar, Platform } from 'react-native';

export default class IssLocationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/iss_bg.png')} style={styles.BackroundImage}>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.titleText}>ISS Location Screen!</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    droidSafeArea: { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
    backgroundImage: { flex: 1, resizeMode: 'cover', },
    titleContainer: { flex: 0.1, justifyContent: "center", alignItems: "center" },
    titleText: { fontSize: 30, fontWeight: "bold", color: "white" }
})
