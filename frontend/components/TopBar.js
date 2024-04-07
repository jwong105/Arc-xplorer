import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const TopBar = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>EXPLORE</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black', // Background color of the bar
    height: 100, // Height of the bar
    width: '100%',
    justifyContent: 'center', // Align items vertically (optional)
    alignItems: 'center', // Align items horizontally (optional)
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 50,
  }
});

export default TopBar;