import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from '../constants/Colors';


const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = ({ userChoice }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userChoice));

    return (
        <View style={styles.screen}>
            <Text> Opponent's Guess </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='LOWER' onPress={() => { }} color={Colors.accent} />
                    </View>
                    <View style={styles.button}>
                        <Button title='GREATER' onPress={() => { }} color={Colors.primary} />
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    /* buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',

    } */
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: '40%', // Equal width for both buttons
        borderRadius: 10, // Rounded border
        overflow: 'hidden', // Clip child content within rounded border
    },
});

export default GameScreen;