import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Material from '../../components/Material';
import ErrorBoundary from 'react-native-error-boundary';
import { useState } from 'react';
import Tamaguitest from '../../components/Tamaguitest';
import { ScrollView } from 'react-native-gesture-handler';
export default function TabTwoScreen() {
  //get essentials bariable from local search params when clicked from page one
  //inevutably has no vaue if tab is clicked
  const [isErrorComponentVisible, setIsErrorComponentVisible] =useState(false)
  return (
    <View style={styles.container}>
      <ScrollView> <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/**implementing chat ai below */}
      <ErrorBoundary>  <Button onPress={() => setIsErrorComponentVisible(true)} >Throw error</Button>
        {isErrorComponentVisible && <Material/>}
        </ErrorBoundary>
        <ErrorBoundary>  <Button onPress={() => setIsErrorComponentVisible(true)} >Check if tamagui works </Button>
        {isErrorComponentVisible && <Tamaguitest/>}
        </ErrorBoundary></ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
