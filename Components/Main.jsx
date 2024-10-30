import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Enter Your Email' keyboardType='email-address' autoCapitalize='none' />
                <TextInput style={styles.input} placeholder='Enter Your Password' autoCapitalize='none' secureTextEntry />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    },

    text: {
        color: "#fff",
        fontSize: 30,
        paddingBottom: 20
    },
    inputContainer: {
        width: "100%"
    }
    ,
    input: {
        color: "black",
        backgroundColor: "#fff",
        padding: 10,
        width: "100%",
        borderRadius: 5,
        marginTop:10,
        marginBottom:10
    },

    buttonContainer:{
        backgroundColor:"#fff",
        padding:10,
        borderRadius:10,
        textAlign:"center"
    }
})

export default Main