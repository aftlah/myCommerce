import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


export const RenderComp = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderBottomWidth: 1, paddingVertical: 10 }}>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                <View style={{ width: 240, marginBottom: 10, rowGap: 10 }}>
                    <View>
                        <Text>Merk : </Text>
                        <Text>{item.title}</Text>
                    </View>
                    <View>
                        <Text>Deskripsi :</Text>
                        <Text>{item.description}</Text>
                    </View>
                </View>
                <Text>Stock : {item.stock}</Text>
                <Text>Price : ${item.price}</Text>
            </View>
            <View style={{}}>
                <View style={{ justifyContent: 'center' }}>
                    <Image source={{ uri: item.thumbnail }} style={{ width: 100, height: 100 }} />
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>⭐{item.rating}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const DetailCategoryPage = ({ route, navigation }) => {
    const [datas, setDatas] = useState([]);
    const { category } = route.params;

    const FetchData = async () => {
        try {
            const datas = await axios.get(`https://dummyjson.com/products/category/${category}`);
            const res = await datas.data;
            setDatas(res.products);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        FetchData();
    }, [])

    return (
        <View style={{ flex: 1, padding: 25 }}>
            <View style={{ width: 'auto', marginBottom: 10 }}>
                <Text style={{ fontSize: 20, borderBottomWidth: 1, textAlign: 'center', paddingBottom: 10 }}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
            </View>

            <FlatList
                data={datas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RenderComp item={item} />}
                ListEmptyComponent={() => <Text style={{ textAlign: 'center' }}>Data Not Found</Text>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default DetailCategoryPage

const styles = StyleSheet.create({})