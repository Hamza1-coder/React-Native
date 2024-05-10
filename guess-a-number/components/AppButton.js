import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const AppButton = (props) => {
  return (
    <TouchableOpacity style={{...styles.button, ...props.style}} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '40%', // Equal width for both buttons
    borderRadius: 10, // Rounded border
    overflow: 'hidden', // Clip child content within rounded border
    backgroundColor: 'white', // Default background color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
  },
  buttonText: {
    color: 'white', // Text color
    fontFamily: 'open-sans', // Example of setting font family
    fontSize: 16
  }
});

// export AppButton;
