import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import { AppButton as Button } from '../components/AppButton';

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

const GameScreen = ({ userChoice, onGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess == userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if (
            direction === 'lower' && currentGuess < userChoice
            ||
            direction === 'greater' && currentGuess > userChoice
        ) {
            Alert.alert(
                'Don\'t Lie!!',
                'You know that this is wrong...',
                [
                    {
                        text: 'Sorry', style: 'cancel'
                    }
                ]
            )
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1)
    };

    return (
        <View style={styles.screen}>
            <Text> Opponent's Guess </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <View style={styles.buttonContainer}>
                    <Button style={{ backgroundColor: Colors.accent }} onPress={nextGuessHandler.bind(this, 'lower')}>
                        LOWER
                    </Button>
                    <Button style={{ backgroundColor: Colors.primary }} onPress={nextGuessHandler.bind(this, 'greater')}>
                        GREATER
                    </Button>
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
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
});

export default GameScreen;