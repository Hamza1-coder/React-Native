import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = ({title, onDelete }) => {
    return (
        <TouchableOpacity onPress={onDelete}>
        <View style={styles.listItem}>
            <Text>{title}</Text>
        </View>
        </TouchableOpacity>
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