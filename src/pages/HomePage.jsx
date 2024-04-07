import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Icon from 'react-native-vector-icons/Ionicons';
import { CardProduct, CardCategory } from "../components";

const HomePage = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [products2, setProducts2] = useState([]);
    const [category, setCategory] = useState([]);

    const FetchData = async () => {
        try {
            const datas = await axios.get("https://dummyjson.com/products?limit=5");
            const res = await datas.data;
            setProducts(res.products);

            const datas2 = await axios.get(
                "https://dummyjson.com/products?limit=5&skip=10"
            );
            const res2 = await datas2.data;
            setProducts2(res2.products);

            const dataCategory = await axios.get("https://dummyjson.com/products/categories");
            const resCategory = await dataCategory.data;
            setCategory(resCategory);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        FetchData();
    }, []);

    // console.log("Data Category :" + category)

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image
                    style={styles.profile}
                    source={{
                        uri: "https://th.bing.com/th/id/R.01a2fb974429f5b93ba993d67894f097?rik=2TH6dxjuaGvyhg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_119029.png&ehk=C4aZ0qzmdkDSdlGh0QuwthbcBTM5C6EeXjC7hwYUlPY%3d&risl=&pid=ImgRaw&r=0",
                    }}
                />
                <TouchableOpacity
                    style={styles.nameWrapper}
                    onPress={() => navigation.navigate("Profile")}
                >
                    <Text style={styles.nama}>Altaf Fattah Amanullah</Text>
                    <Text style={styles.nomer}>089601701998</Text>
                </TouchableOpacity>
            </View>

            <View style={{ paddingHorizontal: 10 }}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.trending}>Category</Text>
                </View>

                <FlatList
                    data={category}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => <CardCategory item={item.item} navigation={navigation} />}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* <Text style={styles.listProduct}>List Product</Text> */}

            <View style={styles.wrapperList}>
                {products.length <= 0 && products2.length <= 0 ? (
                    <Text style={styles.NoProduct}>Products Tidak Ada</Text>
                ) : null}
                <View>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.trending}>Trending</Text>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate("ListProduct")}
                            onPress={() => alert('Menuju ke halaman trending')}

                        >
                            <View style={styles.lihatSemuaWrapper}>
                                <Text style={styles.lihatSemua}>Lihat Semua</Text>
                                <Icon size={20} name="chevron-forward-outline" style={{ color: "gray", }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal
                        data={products}
                        key={products.id}
                        keyExtractor={(item) => item.id}
                        renderItem={(item) => <CardProduct items={item.item} />}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.trending}>Baru</Text>
                        <TouchableOpacity
                            onPress={() => alert('Menuju ke halaman Products Baru')}
                        >
                            <View style={styles.lihatSemuaWrapper}>
                                <Text style={styles.lihatSemua}>Lihat Semua</Text>
                                <Icon size={20} name="chevron-forward-outline" style={{ color: "gray", }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal
                        data={products2}
                        key={products2.id}
                        keyExtractor={(item) => item.id}
                        renderItem={(item) => <CardProduct items={item.item} />}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    lihatSemuaWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lihatSemua: {
        fontSize: 14,
        color: "gray",
        fontWeight: "600",
        textAlign: 'center',
        marginTop: -2
    },
    trending: {
        fontSize: 20,
        fontWeight: "bold",
    },
    titleWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 20,
        // marginBottom:7
    },
    wrapperList: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
    NoProduct: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
        backgroundColor: "red",
    },
    listProduct: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginTop: 25,
        // position: 'absolute', top: 0, alignSelf: 'center'
    },

    nameWrapper: {
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 10,
    },
    nama: {
        fontSize: 15,
        fontWeight: "bold",
    },
    nomer: {
        fontSize: 12,
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
});
