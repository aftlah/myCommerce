import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const CardProduct = ({ items }) => {
    // console.log(items.images[0]);
    return (
        <TouchableOpacity
            style={styles.CardWrapper}
            onPress={() => alert('Hello World')}
        >

            <Text style={styles.namaBrand}>{items.brand}</Text>
            <Image source={{ uri: items.images[2] }} style={styles.image} />
        </TouchableOpacity>
    )
}

export default CardProduct

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "50%",
        zIndex: -10,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 5,
    },
    namaBrand: {
        fontSize: 17,
        color: 'black',
        height: 40,
        textAlign: 'center',
        justifyContent: 'center',
    },
    CardWrapper: {
        width: 150,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        margin: 10,
        padding: 10
    }
})