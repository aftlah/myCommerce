import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CardProduct } from '../components'
import axios from 'axios'



const HomePage = ({ navigation }) => {
    const [products, setProducts] = useState([])
    const [products2, setProducts2] = useState([])


    const FetchData = async () => {
        try {
            const datas = await axios.get('https://dummyjson.com/products?limit=5')
            const res = await datas.data
            setProducts(res.products)

            const datas2 = await axios.get('https://dummyjson.com/products?limit=5&skip=10')
            const res2 = await datas2.data
            setProducts2(res2.products)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        FetchData()
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.profile}
                    source={{ uri: "https://th.bing.com/th/id/R.01a2fb974429f5b93ba993d67894f097?rik=2TH6dxjuaGvyhg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_119029.png&ehk=C4aZ0qzmdkDSdlGh0QuwthbcBTM5C6EeXjC7hwYUlPY%3d&risl=&pid=ImgRaw&r=0" }}
                />
                <TouchableOpacity
                    style={styles.nameWrapper}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text style={styles.nama}>Altaf Fattah Amanullah</Text>
                    <Text style={styles.nomer}>089601701998</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.listProduct}>List Product</Text>
            <View style={styles.wrapperList}>
                {products.length <= 0 && products2.length <= 0 ? <Text style={styles.NoProduct}>Products Tidak Ada</Text> : null}
                <View >
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id}
                        renderItem={(item) => <CardProduct items={item.item} />}
                    />
                </View>
                <View >
                    <FlatList
                        data={products2}
                        keyExtractor={(item) => item.id}
                        renderItem={(item) => <CardProduct items={item.item} />}
                    />
                </View>
            </View>
        </ScrollView >
    )
}

export default HomePage

const styles = StyleSheet.create({
    wrapperList: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    NoProduct: { fontSize: 20, fontWeight: 'bold', marginVertical: 10, backgroundColor: 'red' },
    listProduct: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 25,
        // position: 'absolute', top: 0, alignSelf: 'center'
    },

    nameWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
    },
    nama: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    nomer: {
        fontSize: 12,
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 50
    }
})