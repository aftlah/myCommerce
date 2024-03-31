import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CardCategory = ({ item, navigation  }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Category', { category: item })}
        >
            <Text>{item}</Text>
        </TouchableOpacity>
    )
}

export default CardCategory;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 7,
        borderRadius: 10,
        elevation: 5
    }
})
