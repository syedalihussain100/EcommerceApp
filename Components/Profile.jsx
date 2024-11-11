import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://media.istockphoto.com/id/941782244/photo/portrait-of-a-young-school-boy-smiling.jpg?s=612x612&w=0&k=20&c=aUC2sBPiNAHNItWWrAZ1scbwEmcSxBgptte9BXkOJfA=" }} style={styles.imageConatiner} />
            {/* <Text style={styles.text}>Profile Screen</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 23,
        textAlign: "center",
    },

    imageConatiner: {
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: "auto"
    }
})

export default Profile