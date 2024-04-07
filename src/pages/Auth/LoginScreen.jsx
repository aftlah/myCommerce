import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { getData, saveData } from '../../store/SecureStore'
import axios from 'axios'

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const fetchLogin = async () => {

    if (email === '' || password === '') return alert('Please fill all fields');

    try {
      const datas = await axios.post('http://192.168.0.8:3000/login', {
        email: email,
        password: password
      })

      const { currUser, token } = datas.data

      await saveData('currUser', JSON.stringify(currUser))
      await saveData('token', JSON.stringify(token))

      navigation.navigate('HomeScreen')

    } catch (error) {
      console.log(error)
    }
  }



  const handleLogin = () => {
    fetchLogin()
  }




  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Text>Login</Text>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={styles.InputStyle}
          placeholder='Email'
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <Button title='Login' onPress={handleLogin} />
      </View>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  InputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: 300,
    margin: 10,
    padding: 10,
  },
  ButtonStyle: {

  }
})