//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyTabs from '../navigation/MyTabs';
import { COLORS } from '../constant/theme';

// create a component
const Home = () => {
    return (
        // <View style={styles.container}>
            <MyTabs />
        // </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: COLORS.secondary,
    },
});

//make this component available to the app
export default Home;
