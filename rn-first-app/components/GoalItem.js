import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#D0EFC6', // Light green background color
        borderBottomWidth: 1,
        borderColor: '#4CAF50', // Green border color
    },
})

export default GoalItem