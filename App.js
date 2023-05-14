import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import SearchScreen from '../screens/searchScreen'
import TransactionScreen from '../screens/transactionScreen'


export default class App extends React.Component{
  render(){
  return (
   <AppContainer/>
  )
  }
}

const TabNavigator = createBottomTabNavigator({
  TransactionScreen: {screen:TransactionScreen},
  SearchScreen: {screen: SearchScreen}
})
const AppContainer = createAppContainer(TabNavigator)