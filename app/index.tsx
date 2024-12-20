import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View style={styles.container}>
      <Text className='text-center text-3xl font-pblack' >Aura!</Text>
      <Link href="/home" className='text-blue-600' >Go To Profile</Link>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  }
})