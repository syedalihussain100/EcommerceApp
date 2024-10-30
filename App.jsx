import React from 'react'
import { SafeAreaView, StyleSheet } from "react-native";
import Main from './Components/Main';

const App = () => {
  let propsData = "Syed Muhemin ALi";

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Main data={propsData} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default App
