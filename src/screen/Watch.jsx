//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, FlatList, Image } from 'react-native';
import { COLORS, SIZES } from '../constant/theme';
import SearchIcon from '../assets/svg/SearchIcon';
import { ActivityIndicator, Searchbar, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import GetMoviesList from '../shared/redux/actions/GetMoviesList';
import { appServices } from '../shared/redux/appServices';
import BackIcon from '../assets/svg/BackIcon';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
const { width ,height} = Dimensions.get('window');


const Watch = () => {
    const { moviesList, moviesListLoading } = useSelector((state) => state.GetMoviesList)
    const [movies, setMovies] = useState(data);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation()
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(moviesList)
        if (moviesList && moviesList.length)
            setMovies(moviesList)
    }, [moviesList])
    useEffect(() => {
        dispatch(appServices.GetMoviesList())
    }, [])

    const handleSearchIconClick = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.length) {
            // fetchMovies(query);
            setMovies(moviesList.filter(x => x.title.toLowerCase().includes(query.toLowerCase())) || [])
        }
        else {
            setMovies(moviesList || [])
        }
    }

    const Item = ({ title, image, id }) => (
        <TouchableOpacity onPress={() => navigation.navigate('MovieDetail', { movieId: id })} style={styles.item}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${image}` }} style={styles.image} />
            <View style={styles.overlay}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {searchVisible ? (
                      <Searchbar
                      placeholder="Search"
                      onChangeText={handleSearch}
                      value={searchQuery}
                      loading={false}
                      icon={() => <Icon name="search" size={24} />} // Left icon
                      clearIcon={() => <Icon name="close" size={24} />} // Right icon
                      onIconPress={() => console.log('Menu icon pressed')}
                      onClearIconPress={() =>{
                        setSearchVisible(false)
                        setSearchQuery('')}}
                    //   clearIcon={<BackIcon color={'#000'}/>}
                    />
                    // <TextInput
                    // style={{ height: 50, justifyContent: "center",width:'96%', textAlignVertical: 'center' }}
                    //     // style={styles.searchInput}
                    //     placeholder="Search..."
                    //     value={searchQuery}
                    //     mode='outlined'
                    //     onChangeText={handleSearch}
                    //     theme={{ roundness: 50 }}
                    //     onBlur={() => { setSearchVisible(false) }}
                    // />
                ) : (<>
                    <Text style={styles.headerText}>Watch</Text>
                <TouchableOpacity onPress={() => handleSearchIconClick()} style={styles.iconButton}>

                    <SearchIcon />
                </TouchableOpacity>
                </>)}
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {
                    moviesListLoading ?
                        <ActivityIndicator size={'small'} />
                        : null
                }
                <FlatList
                    data={movies || []}

                    renderItem={({ item }) => <Item title={item.title} id={item?.id} image={item.poster_path} />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.list}
                />

            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

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
        width: width * .9,
        // height:height*.4,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width * .9,
        height: 200,
        borderRadius: 10,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        // backgroundColor: 'red',
        borderRadius: 10,
    },
    title: {
        color: '#fff',
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchInput: {
        flex: 1,
        // height:40,
        padding: 10,
        borderRadius: 10,
        borderColor: '#ddd',
        // borderWidth: 1,
        borderRadius: 10,
        marginRight: 10,
    },
});

//make this component available to the app
export default Watch;
