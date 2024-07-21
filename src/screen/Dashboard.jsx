//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constant/theme';

// create a component
const Dashboard = () => {
    return (
        <View style={styles.container}>
            
            <Text>Dashboard</Text>
        </View>
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
export default Dashboard;
