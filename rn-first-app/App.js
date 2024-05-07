import { StyleSheet, View, FlatList, Button } from 'react-native';
import React, { useState } from 'react'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [addGoal, setAddGoal] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    setCourseGoal(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
    setAddGoal(false);
  }

  const cancelGoalHandler = () => setAddGoal(false);

  const removeGoalHandler = (goalId) => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter(goal => goal.key != goalId)
    })
  }

  return (
    <View style = {styles.screen}>
      <View style = {styles.buttonContainer}>
        <Button title='Add New Goal' onPress={() => setAddGoal(true)} color="#FFC300"/>
      </View>
      <GoalInput addGoalHandler={addGoalHandler} cancelGoalHandler={cancelGoalHandler} visible={addGoal}/>
      <FlatList
        style={styles.list}
        data={courseGoal}
        renderItem={ itemData  => (
          <GoalItem
            title={itemData.item.value}
            onDelete={removeGoalHandler.bind(this, itemData.item.key)}
          />
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
  buttonContainer: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',
    width: '60%',
    borderRadius: 20,
},
});
