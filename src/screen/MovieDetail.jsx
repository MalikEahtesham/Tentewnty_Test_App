// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
// import { SIZES } from '../constant/theme';
// import { useNavigation } from '@react-navigation/native';

// // create a component
// const MovieDetail = () => {
//     const navigation = useNavigation()
//     return (
//         <View style={styles.container}>
//             {/* <View style={{ backgroundColor: "red",  }}> */}
//             <ImageBackground
//                 style={{ flex: .6 }}
//                 resizeMode='cover'
//                 source={{ uri: `https://image.tmdb.org/t/p/w500/fDmci71SMkfZM8RnCuXJVDPaSdE.jpg` }}>

//                 <View style={styles.title}>

//                     <View style={{ marginBottom: 10, width: '90%', justifyContent: 'flex-end', alignItems: 'center' }}>
//                         <Text style={{ color: '#fff' }}>Title</Text>
//                         <Text style={{ color: '#fff' }}>In theaters december 22, 2021</Text>
//                         <View style={{ justifyContent: 'space-around', width: '90%', alignItems: 'center' }}>
//                             <TouchableOpacity onPress={() => navigation.navigate('ShowDetail')} style={{ backgroundColor: '#61C3F2', alignItems: "center", height: 50, width: '40%', justifyContent: 'center', borderRadius: SIZES.radius }}>
//                                 <Text style={{ color: '#fff' }}>Get Tickets</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={{ backgroundColor: '#61C3F2', alignItems: "center", height: 50, width: '40%', justifyContent: 'center', borderRadius: SIZES.radius }}>
//                                 <Text style={{ color: '#fff' }}>Watch Trailer</Text>
//                             </TouchableOpacity>
//                         </View>

//                     </View>
//                 </View>

//             </ImageBackground>

//             {/* </View> */}
//             <View style={{ backgroundColor: '#fff', flex: .4 }}>
//                 <View style={{ backgroundColor: 'pink', flex: .3 }}>
//                     <Text>Genres</Text>

//                     <View style={styles.chipsContainer}>

//                         <View style={styles.chip}>
//                             <Text style={styles.chipText}>Action</Text>
//                         </View>
//                         <View style={styles.chip}>
//                             <Text style={styles.chipText}>Action</Text>
//                         </View>
//                         <View style={styles.chip}>
//                             <Text style={styles.chipText}>Action</Text>
//                         </View>
//                         <View style={styles.chip}>
//                             <Text style={styles.chipText}>Action</Text>
//                         </View>

//                     </View>
//                 </View>
//                 <View style={{ backgroundColor: 'yellow', flex: .7 }}>
//                     <Text>Overview</Text>

//                     <Text>As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them. Discover the origins of the very first independent intelligence agency in The King's Man. The Comic Book “The Secret Service” by Mark Millar and Dave Gibbons.</Text>
//                 </View>

//             </View>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         // backgroundColor: '#2c3e50',
//     },
//     title: {
//         ...StyleSheet.absoluteFillObject,
//         flex: .5,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         justifyContent: 'flex-end',
//         alignItems: 'center',

//     },
//     chipsContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         // backgroundColor: 'yellow',
//         // flexWrap: 'wrap',
//         // alignItems: 'center',
//         marginTop: 10,
//     },
//     chip: {
//         backgroundColor: '#e0e0e0',
//         borderRadius: 20,
//         paddingVertical: 5,
//         paddingHorizontal: 10,
//         // margin: 5,
//     },
//     chipText: {
//         color: '#333',
//     },
// });

// //make this component available to the app
// export default MovieDetail;


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, ImageBackground, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constant/theme';
import { useDispatch, useSelector } from 'react-redux';
import { appServices } from '../shared/redux/appServices';
import BackIcon from '../assets/svg/BackIcon';

const { width, height } = Dimensions.get('window');

const MovieDetail = () => {
    // const {id}=use
    const { moviesDetailByID } = useSelector((state) => state.GetMovieDetailByID)
    const { moviesImagesByID } = useSelector((state) => state.GetMovieImagesByID)
    const navigation = useNavigation();
    const route = useRoute();
    const { movieId } = route?.params
    const [orientation, setOrientation] = useState('PORTRAIT');
    const dispatch = useDispatch()
    const determineAndSetOrientation = () => {
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;

        if (width < height) {
            console.log("PORTRAIT")
            setOrientation('PORTRAIT');
        } else {
            console.log('LANDSCAPE')
            setOrientation('LANDSCAPE');
        }
    }

    useEffect(() => {

        determineAndSetOrientation();
        Dimensions.addEventListener('change', determineAndSetOrientation);

        // return () => {
        //     Dimensions.removeEventListener('change', determineAndSetOrientation)
        // }
    }, []);
    const handleBackPress = () => {
        navigation.goBack();
    };
    const handleWatchTrailer = () => {
        // Linking.openURL('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
        navigation.navigate('VideoScreen')
    }
    useEffect(() => {
        if (movieId) {
            dispatch(appServices.GetMovieDetailByID(movieId))
            dispatch(appServices.GetMovieImagesByID(movieId))
        }
        return () => {
            dispatch(appServices.GetMovieImagesByIDClear(null))
        }

    }, [])

    // useEffect(() => {
    //     if (moviesImagesByID) {
    //         console.log(moviesImagesByID)
    //     }
    // }, [moviesImagesByID])

    const array = [
        '#15D2BC',
        '#E26CA5',
        '#564CA3',
        '#CD9D0F',
        '#61C3F2',
    ]

    return (
        // width < height
        <SafeAreaView style={[styles.container, { flexDirection: orientation === 'LANDSCAPE' ? 'row' : 'column' }]}>

            {/* <View style={{backgroundColor:'red'}}> */}
            <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500/${moviesDetailByID?.poster_path}` }} style={styles.posterImage} >
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    {/* <Text style={styles.backButtonText}>{'<'}</Text> */}
                    <BackIcon  color={'#fff'}/>
                </TouchableOpacity>
                <View style={{position:'absolute', bottom:0,left:0,right:0, alignItems: 'center' }}>
                    <Text style={styles.movieTitle}>{moviesDetailByID?.title}</Text>
                    <Text style={styles.movieReleaseDate}>In Theaters {moviesDetailByID?.release_date}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ShowDetail')} style={styles.getTicketsButton}>
                        <Text style={styles.getTicketsButtonText}>Get Tickets</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { handleWatchTrailer() }} style={styles.watchTrailerButton}>
                        <Text style={styles.watchTrailerButtonText}>Watch Trailer</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            {/* </View> */}
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.movieInfo}>
                    <Text style={styles.sectionTitle}>Genre</Text>
                    <View style={styles.genresContainer}>
                        {(moviesDetailByID?.genres || []).map((genre, index) => (
                            <View key={genre} style={[styles.genreTag, { backgroundColor: array[index] }]}>
                                <Text style={styles.genreText}>{genre?.name}</Text>
                            </View>
                        ))}
                    </View>
                    <Text style={styles.sectionTitle}>Overview</Text>
                    <Text style={styles.overviewText}>
                        {moviesDetailByID?.overview}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    backButton: {
        marginLeft: 10,
        padding: 15,
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
    content: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    posterImage: {
        // ...StyleSheet.absoluteFillObject,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: width,
        height: height * 0.5,
        resizeMode: 'cover',
    },
    movieInfo: {
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
    },
    movieTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    movieReleaseDate: {
        fontSize: 18,
        color: COLORS.white,
        textAlign: 'center',
        marginVertical: 10,
    },
    getTicketsButton: {
        width: '40%',
        paddingVertical: 15,
        backgroundColor: '#4A90E2',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    getTicketsButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    watchTrailerButton: {
        width: '40%',
        paddingVertical: 15,
        // backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#4A90E2',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    watchTrailerButtonText: {
        fontSize: 18,
        color: '#4A90E2',
        fontWeight: 'bold',
    },
    genresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
    },
    genreTag: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#E5F4FE',
        borderRadius: 20,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    genreText: {
        fontSize: 16,
        color: '#fff',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf: 'flex-start',
    },
    overviewText: {
        fontSize: 16,
        color: '#000',
        marginTop: 10,
        textAlign: 'justify',
    },
});

export default MovieDetail;
