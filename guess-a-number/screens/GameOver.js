import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { AppButton as Button } from '../components/AppButton';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';


const GameOver = ({ roundsNumber, userNumber, onGameRestart }) => {
    return (
        <View style={styles.screen}>
            <TitleText style={styles.title}>The Game is Over!!</TitleText>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Number of Rounds: {roundsNumber}</BodyText>
                <BodyText style={styles.resultText}>Number was: {userNumber}</BodyText>
                <Image
                    style={styles.tinyImage}
                    source={{
                        uri: 'https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D181740068W10000H997/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/game-over-sticker.jpg',
                    }}
                />
                <MaterialCommunityIcons name="gamepad-up" size={24} color="black" />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button style={{ backgroundColor: Colors.primary, width: '100%' }} onPress={onGameRestart}>
                        Start New Game
                    </Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Background color
    },
    title: {
        fontSize: 24,
        color: Colors.primary, // Primary color
        marginBottom: 20,
    },
    resultContainer: {
        backgroundColor: '#f0f0f0', // Light background color
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333', // Text color
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 10,
        padding: 20
    },
    tinyImage: {
        width: 100,
        height: 50
    }
});

export default GameOver;