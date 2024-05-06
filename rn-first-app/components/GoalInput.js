import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
const GoalInput = ({ addGoalHandler }) => {
    const [enteredGoal, setEnteredGoal] = useState("");
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Course Goal'
                style={styles.inputText}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title='ADD'
                // onPress={addGoalHandler.bind(this, enteredGoal)}
                onPress={() => addGoalHandler(enteredGoal, setEnteredGoal)}
                color="#4CAF50" />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        width: '80%',
    },
    inputText: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#4CAF50', // Green border color
        backgroundColor: '#ffffff', // White background
        padding: 10,
        marginRight: 10,
    },
})

export default GoalInput