import "react-native-gesture-handler";
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Screen</Text>
    </View>
  );
}

const CallScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Call Screen</Text>
    </View>
  );
}

const StatusScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Status Screen</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#007bff",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "white" },
          tabBarIndicatorStyle: {
            backgroundColor: "#007bff",
            height: 3,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          }
        }}
      >
        <Tab.Screen
          name="Chats"
          component={ChatScreen}
        />
        <Tab.Screen
          name="Calls"
          component={CallScreen}
        />
        <Tab.Screen
          name="Status"
          component={StatusScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'black',
  },
});

export default App;

























// import { View, Text, StyleSheet } from 'react-native'  //bottom navigation
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Icon from "react-native-vector-icons/Ionicons"

// const Tab = createBottomTabNavigator();

// const getTabBarIcon = (routeName, focused, color, size) => {
//   let iconName;
//   if (routeName === "Home") {
//     iconName = focused ? "home" : "home-outline"
//   } else if (routeName === "Profile") {
//     iconName = focused ? "person" : "person-outline"
//   } else if (routeName === "Settings") {
//     iconName = focused ? "settings" : "settings-outline"
//   }

//   return <Icon name={iconName} size={size} color={color} />
// }

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home Screen</Text>
//     </View>
//   )
// }

// const SettingsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Setting Screen</Text>
//     </View>
//   )
// }

// const ProfileScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Profile Screen</Text>
//     </View>
//   )
// }

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route.name, focused, color, size),
//           tabBarActiveTintColor: "#007bff",
//           tabBarInactiveTintColor: "gray",
//           tabBarStyle: {
//             paddingBottom: 5,
//             height: 60
//           }
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>

//   )
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   text: {
//     fontSize: 30,
//     fontWeight: "bold"
//   }
// })

// export default App


























// import "react-native-gesture-handler";
// import { View, Text, Button } from 'react-native';  //Drawer Navigation
// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// const Drawer = createDrawerNavigator();

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
//     </View>
//   );
// };

// const Profile = () => {
//   return (
//     <View>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           drawerStyle: {
//             backgroundColor: '#fff',
//             width: 240,
//           },
//           drawerLabelStyle: {
//             fontSize: 14,
//             color: 'purple',
//           },
//           headerStyle: {
//             backgroundColor: 'purple',
//           },
//           headerTintColor: '#fff',
//           headerTitleAlign: 'center',
//         }}
//       >
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Profile" component={Profile} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
