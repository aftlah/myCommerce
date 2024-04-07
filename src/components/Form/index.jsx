import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Form = () => {



    return (
        <View>
            <TextInput
                placeholder='Username'
                onChangeText={(text) => console.log(text)}
            />
        </View>
    )
}

export default Form