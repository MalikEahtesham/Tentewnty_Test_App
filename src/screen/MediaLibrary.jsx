//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, FlatList, Image } from 'react-native';
import { COLORS, SIZES } from '../constant/theme';
import SearchIcon from '../assets/svg/SearchIcon';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


// create a component
const data = [
    {
        id: '1',
        title: 'Image 1',
        image: 'https://example.com/image1.jpg',
    },
    {
        id: '2',
        title: 'Image 2',
        image: 'https://example.com/image2.jpg',
    },
    {
        id: '3',
        title: 'Image 3',
        image: 'https://example.com/image3.jpg',
    },
];
const { width } = Dimensions.get('window');
const itemWidth = (width - 30) / 2; // Adjust width based on margins


const MediaLibrary = () => {
    const [movies, setMovies] = useState(data);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation()
    const handleSearchIconClick = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.length) {
            // fetchMovies(query);
            setMovies(data.filter(x => x.title.includes(query)))
        }
        else {
            setMovies(data)
        }
    }
    const MovieItem = ({ title, image }) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={{ uri: image }} style={styles.itemImage} />
                <View style={styles.overlay}>
                    <Text style={styles.itemTitle}>{title}</Text>
                </View>
            </View>
        );
    };

    //       <TouchableOpacity onPress={() => navigation.navigate('MovieDetail')} style={styles.item}>
    //       <Image source={{ uri: `https://image.tmdb.org/t/p/w500/fDmci71SMkfZM8RnCuXJVDPaSdE.jpg` }} style={styles.image} />
    //       <View style={styles.overlay}>
    //           <Text style={styles.title}>{title}</Text>
    //       </View>
    //   </TouchableOpacity>
    const Item = ({ title, image }) => (
        <MovieItem title={title} image={image} />
    );
    const renderItem = ({ item }) => (
        <MovieItem title={item.title} image={item.image} />
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {searchVisible ? (
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search..."
                        value={searchQuery}
                        mode='outlined'
                        onChangeText={handleSearch}
                        theme={{ roundness: 50 }}
                        onBlur={() => { setSearchVisible(false) }}
                    />
                ) : (
                    <Text style={styles.headerText}>App Header</Text>)}
                <TouchableOpacity onPress={() => handleSearchIconClick()} style={styles.iconButton}>

                    <SearchIcon />
                </TouchableOpacity>
            </View>
            {/* <View style={{ width: '96%' }}> */}

            <FlatList
                data={movies}
                renderItem={renderItem}
                // renderItem={({ item }) => <Item title={item.title} image={item.image} />}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContainer}
            // contentContainerStyle={styles.listContainer}

            />

            {/* </View> */}

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // width:'96%'
    },
    listContainer: {
        paddingHorizontal: 10,
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    itemContainer: {
        width: itemWidth,
        height: itemWidth * .7, // Adjust height based on aspect ratio
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#ccc',
    },
    itemImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconButton: {
        padding: 5,
    },
    list: {
        alignItems: 'center',
    },
    item: {
        width: width * 0.4,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 240,
        borderRadius: 10,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        borderRadius: 10,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchInput: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#ddd',
        // borderWidth: 1,
        borderRadius: 10,
        marginRight: 10,
    },
});

//make this component available to the app
export default MediaLibrary;
