// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from './screens/ExploreScreen';

export default function App() {
  // const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <AppStack ref={navigationRef => {
        setTopLevelNavigator(navigationRef);
      }}>
      </AppStack> */}

      {/* <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: '#000000',
          position: 'absolute',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#fff',
      })}>
        <Tab.Screen name="EXPLORE" component={ExploreScreen} />
      </Tab.Navigator>
    </NavigationContainer >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
