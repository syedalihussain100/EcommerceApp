import * as React from 'react';
import { View, Text, Button } from 'react-native';


function Main({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginBottom: 10 }}>Home Screen</Text>
            <Button  title='Go to Profile Screen' onPress={()=> navigation.navigate("Profile")}/>
        </View>
    );
}


export default Main;