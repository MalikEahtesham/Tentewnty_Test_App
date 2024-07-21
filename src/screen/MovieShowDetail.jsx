import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Dimensions, FlatList, Image } from 'react-native';
import CustomSeatingPlan from '../component/CustomSeatingPlan';
import BackIcon from '../assets/svg/BackIcon';

const { width, height } = Dimensions.get('window');

const dates = ['5 Mar', '6 Mar', '7 Mar', '8 Mar', '9 Mar'];
const sessions = [
    {
        id: '1',
        time: '12:30',
        hall: 'Cinetech + Hall 1',
        price: '50$',
        bonus: '2500 bonus',
        seatingPlan: 'https://example.com/seatingPlan1.jpg',
    },
    {
        id: '2',
        time: '13:30',
        hall: 'Cinetech + Hall 1',
        price: '75$',
        bonus: '3000 bonus',
        seatingPlan: 'https://example.com/seatingPlan2.jpg',
    },
    // Add more sessions as needed
];

const MovieShowDetail = () => {
    const renderDateItem = ({ item }) => (
        <TouchableOpacity style={styles.dateItem}>
            <Text style={styles.dateText}>{item}</Text>
        </TouchableOpacity>
    );

    const renderSessionItem = ({ item }) => (
        <View style={{ height: height * .5 }}>
            <View style={styles.sessionItem}>
                <View style={styles.sessionHeader}>
                    <Text style={styles.sessionTime}>{item.time}</Text>
                    <Text style={styles.sessionHall}>{item.hall}</Text>
                </View>
                <CustomSeatingPlan />
                {/* <Image source={{ uri: item.seatingPlan }} style={styles.seatingPlanImage} /> */}

            </View>
            <View style={styles.sessionFooter}>
                <Text style={styles.sessionPrice}>From {item.price} or {item.bonus}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.customHeader}>
                <TouchableOpacity style={styles.backButton}>
                    <BackIcon />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>The King’s Man</Text>
                {/* <Text style={styles.movieSubtitle}>In Theaters December 22, 2021</Text> */}


            </View>
            {/* <View style={{ flexDirection: 'row', justifyContent: '' }}>
                <View style={{ justifyContent: 'center' }}>

                    <Text>{`<`}</Text>
                </View>
                <View style={{ backgroundColor: 'red',justifyContent:'center' }}><Text>hihi</Text></View>

                {/* <View style={styles.header}>
                    <Text style={styles.movieTitle}>The King’s Man</Text>
                    <Text style={styles.movieSubtitle}>In Theaters December 22, 2021</Text>
                </View> 
            </View> */}
            <View style={{ height: height * .1, }}>
                <FlatList
                    horizontal
                    data={dates}
                    renderItem={renderDateItem}
                    keyExtractor={(item) => item}
                    contentContainerStyle={styles.dateList}
                />
            </View>
            <FlatList
                horizontal
                data={sessions}
                renderItem={renderSessionItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.sessionList}
            />
            <TouchableOpacity style={styles.selectButton}>
                <Text style={styles.selectButtonText}>Select Seats</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    customHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    backButton: {
        marginRight: 20,
    },
    backButtonText: {
        fontSize: 24,
        color: '#000',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    movieInfo: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    header: {
        alignSelf: 'center',
        paddingVertical: 10,
    },
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    movieSubtitle: {
        fontSize: 14,
        color: '#4A90E2',
    },
    dateList: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: height * 0.1,
        // justifyContent:'center',
        alignItems: 'center',
        // backgroundColor:'red'
    },
    dateItem: {
        // paddingVertical: 10,
        // alignItems:'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#E5F4FE',
        borderRadius: 20,
        height: 40,
        marginHorizontal: 5,
    },
    dateText: {
        fontSize: 16,
        color: '#000',
    },
    sessionList: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    sessionItem: {
        width: width * 0.7,
        height: height * 0.5,
        marginHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        overflow: 'hidden',
    },
    sessionHeader: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    sessionTime: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    sessionHall: {
        fontSize: 14,
        color: '#9B9B9B',
    },
    seatingPlanImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    sessionFooter: {
        padding: 10,
        backgroundColor: '#fff',
    },
    sessionPrice: {
        fontSize: 14,
        color: '#000',
    },
    selectButton: {
        // marginTop: 20,
        marginHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#4A90E2',
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 100,
        right: 100

    },
    selectButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default MovieShowDetail;
