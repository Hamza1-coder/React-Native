import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button, Text, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoal(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
    setEnteredGoal(""); // Clear the input after adding the goal
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHandler} color="#4CAF50" />
      </View>
      <FlatList
        style={styles.list}
        data={courseGoal}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
}

const styles = {
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50, // Add padding for the fixed input field
    backgroundColor: '#f0f0f0', // Light background color
  },
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
  list: {
    width: '80%',
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#D0EFC6', // Light green background color
    borderBottomWidth: 1,
    borderColor: '#4CAF50', // Green border color
  },
};
