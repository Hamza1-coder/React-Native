import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'
const GoalInput = ({ addGoalHandler, visible, cancelGoalHandler }) => {
    const [enteredGoal, setEnteredGoal] = useState("");
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Course Goal'
                    style={styles.inputText}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='ADD'
                            onPress={() => {
                                addGoalHandler(enteredGoal);
                                setEnteredGoal(""); // Clear the input after adding the goal
                            }}
                            color="#4CAF50"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='CANCEL'
                            onPress={() => {
                                cancelGoalHandler();
                                setEnteredGoal(""); // Clear the input in case if user cancel to add
                            }}
                            color="#D2042D"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        width: '80%',
        borderBottomWidth: 1,
        borderColor: '#4CAF50', // Green border color
        backgroundColor: '#ffffff', // White background
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    button: {
        width: '40%', // Equal width for both buttons
        borderRadius: 20, // Rounded border
        overflow: 'hidden', // Clip child content within rounded border
    },
})

export default GoalInput;