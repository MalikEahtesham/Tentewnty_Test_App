// VideoScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Video
                source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }} // Replace with your video URL
                style={styles.video}
                controls={true}
                onEnd={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '100%',
        height: '100%',
    },
});

export default VideoScreen;
