import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfilePage = () => {
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 1, marginTop: 75 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20, rowGap: 10 }}>
                <Image
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                    source={{ uri: "https://th.bing.com/th/id/R.01a2fb974429f5b93ba993d67894f097?rik=2TH6dxjuaGvyhg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_119029.png&ehk=C4aZ0qzmdkDSdlGh0QuwthbcBTM5C6EeXjC7hwYUlPY%3d&risl=&pid=ImgRaw&r=0" }}
                />
                <View style={{}}>
                    <Text style={{ fontSize: 20, fontWeight: '600', textAlign: "center" }}>Altaf Fattah Amanullah</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', textAlign: "center" }}>089601701998</Text>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 40 }}>
                <TouchableOpacity
                    style={{ backgroundColor: 'blue', padding: 10, margin: 10, borderRadius: 10 }}
                    onPress={() => alert('Edit Profile')}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ backgroundColor: 'red', padding: 10, margin: 10, borderRadius: 10 }}
                    onPress={() => alert('Logout')}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfilePage
