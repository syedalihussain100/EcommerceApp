import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const [input, setInput] = useState({ email: "", password: "" })
    let obj = {
        email: "smuheminali@gmail.com",
        password: "abc12345"
    }

    const handleSubmit = () => {
        if (!input.email || !input.password) {
            Alert.alert("All Fields Required");
        }
        else if (obj.email === input.email && obj.password === input.password) {
            navigation.navigate("Home", { email: obj.email, password: obj.password });
        } else {
            Alert.alert("Wrong email or password");
        }
    };

    const handleChange = (field, value) => {
        setInput(prevInput => ({
            ...prevInput,
            [field]: value
        }));
    };
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textContainer}>Login</Text>
            <View style={styles.divInputContainer}>
                <TextInput placeholder='Enter Your Email' placeholderTextColor="lightgray" style={styles.inputContainer} autoCapitalize='none' keyboardType='email-address' value={input.email} onChangeText={(value) => handleChange("email", value)}
                />
            </View>
            <View style={styles.divInputContainer}>
                <TextInput placeholder='Enter Your Password' placeholderTextColor="lightgray" style={styles.inputContainer} autoCapitalize='none' secureTextEntry value={input.password} onChangeText={(value) => handleChange("password", value)} />
            </View>
            <Button title='Login' onPress={handleSubmit} color={"lightblue"} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: "lightblue",
    },
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        paddingHorizontal: 20
    },
    divInputContainer: {
        marginBottom: 10
    },
    textContainer: {
        textAlign: "center",
        fontSize: 20,
        marginBottom:10
    }
})

export default Login