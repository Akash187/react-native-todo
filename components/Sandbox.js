import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 40,
    backgroundColor: '#333',
    flexDirection: 'row',

  },
  boxOne: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 30
  },
  boxTwo: {
    flex: 1,
    backgroundColor: 'gold',
    padding: 20
  },
  boxThree: {
    flex: 2,
    backgroundColor: 'coral',
    padding: 40
  },
  boxFour: {
    flex: 2,
    backgroundColor: 'skyblue',
    padding: 10
  }
})

export default Sandbox
