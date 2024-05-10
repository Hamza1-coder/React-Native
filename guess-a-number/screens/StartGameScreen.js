import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/Colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import {AppButton as Button} from '../components/AppButton'

const StartGameScreen = ({ onStartGame }) => {
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
            <BodyText> You Selected </BodyText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button style={{ backgroundColor: Colors.primary, width: '70%'}} onPress={() => onStartGame(selectedNumber)}>
                Start Game
            </Button>

        </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a New Game!</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText> Select a Number </BodyText>
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
                        <Button style={{ backgroundColor: Colors.accent}} onPress={resetInputHandler}>
                            Reset
                        </Button>
                        <Button style={{ backgroundColor: Colors.primary }} onPress={confrimInputHandler}>
                            Confirm
                        </Button>
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