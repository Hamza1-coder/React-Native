import { StyleSheet, View, FlatList } from 'react-native';
import React, { useState } from 'react'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  const addGoalHandler = (enteredGoal, setEnteredGoal) => {
    setCourseGoal(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
    setEnteredGoal(""); // Clear the input after adding the goal
  }

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        style={styles.list}
        data={courseGoal}
        renderItem={({ item }) => (
          <GoalItem title={item.value} />
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50, // Add padding for the fixed input field
    backgroundColor: '#f0f0f0', // Light background color
  },
  list: {
    width: '80%',
  },
});
