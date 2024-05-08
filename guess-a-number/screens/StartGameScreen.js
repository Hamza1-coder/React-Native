import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/Colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'


const StartGameScreen = ({onStartGame}) => {
    const [enterdValue, setEnterdValue] = useState('');
    const [confrimed, setConfrimed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const numberInputHandler = inputText => {
        setEnterdValue(inputText.replace(/[^0-9]/g, '')); // strict user to enter decimal value
    }
    const resetInputHandler = () => {
        setEnterdValue('');
        setConfrimed(false);
    }
    const confrimInputHandler = () => {
        const chosenNumber = parseInt(enterdValue);
        // only 2-digit positive number is allowed that's why we put a check here
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return;
        }
        setConfrimed(true);
        setSelectedNumber(parseInt(chosenNumber));
        setEnterdValue('');
        Keyboard.dismiss();
    }
    if (confrimed) {
        var confrimedOutput = <Card style={styles.summaryContainer}>
            <Text> You Selected </Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <View style={styles.button}>
                <Button title='Start Game' color={Colors.primary} onPress={() => onStartGame(selectedNumber)}/>
            </View>

        </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text > Select a Number </Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit // when press done it hide the keyboard
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad" // it will open only numpad keyboard
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enterdValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Reset' onPress={resetInputHandler} color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Confrim' onPress={confrimInputHandler} color={Colors.primary} />
                        </View>
                    </View>
                </Card>
                {confrimedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
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
    input: {
        width: 50,
        textAlign: 'center',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }
})

export default StartGameScreen