import { Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { deleteData, getData } from '../store/SecureStore'

const ProfilePage = ({ navigation }) => {
    const [userId, setUserId] = useState()
    const [user, setUser] = useState()
    const [token, setToken] = useState()
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const fetchData = async () => {
        try {
            const ress = await axios.post('http://192.168.0.8:3000/getUser', {
                userId
            })

            const data = await ress.data
            setUser(data)

        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    const LogOut = async () => {
        try {
            const response = await axios.post('http://192.168.0.8:3000/logout', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: {
                    userId
                }
            })
            await deleteData('token');
            await deleteData('currUser');

            navigation.navigate('HomeScreen');

            alert(response.data.message)
        } catch (error) {
            console.log(error);
        }
    }



    const fetchStore = async () => {
        const tokenData = await getData('token');
        setToken(tokenData);

        const userData = await getData('currUser');
        setUserId(userData);
    }

    useEffect(() => {
        fetchStore()
        fetchData()
    }, [])


    // console.log("User = ", user);
    // console.log("Token = ", token);



    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 1, marginTop: 75 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20, rowGap: 10 }}>


                {user > 0 || user ? (
                    <>
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 50 }}
                            source={{ uri: "https://th.bing.com/th/id/R.01a2fb974429f5b93ba993d67894f097?rik=2TH6dxjuaGvyhg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_119029.png&ehk=C4aZ0qzmdkDSdlGh0QuwthbcBTM5C6EeXjC7hwYUlPY%3d&risl=&pid=ImgRaw&r=0" }}
                        />
                        <View style={{}}>
                            <Text style={{ fontSize: 20, fontWeight: '600', textAlign: "center" }}>{user.username}</Text>
                            <Text style={{ fontSize: 16, fontWeight: '400', textAlign: "center" }}>{user.email}</Text>
                        </View>
                    </>
                ) : (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20, rowGap: 10 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>SIlahkan Login Terlebih dahulu..</Text>
                        </View>
                    </View>
                )}

            </View>


            {/* <Button title='Cek isi save data' onPress={click} /> */}
            {/* <Button title='cek isi state' onPress={fetchData} /> */}



            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 40 }}>


                {user > 0 || user ? (
                    <View>
                        <TouchableOpacity
                            style={{ backgroundColor: 'blue', padding: 10, margin: 10, borderRadius: 10 }}
                            onPress={() => alert('Edit Profile')}
                        >
                            <Text style={{ color: 'white', textAlign: 'center' }}>Edit Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ backgroundColor: 'red', padding: 10, margin: 10, borderRadius: 10 }}
                            onPress={() => LogOut()}
                        >
                            <Text style={{ color: 'white', textAlign: 'center' }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity
                        style={{ backgroundColor: 'blue', padding: 10, margin: 10, borderRadius: 10 }}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default ProfilePage
