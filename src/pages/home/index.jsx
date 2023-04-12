import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Logo } from '../../components/logo';
import api from '../../services/api';
import { FoodList } from '../../components/foodList';

export const Home = () => {

    const [inputValue, setInputValue] = useState("");
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await api.get("/foods");
            setFoods(response.data);
        }

        fetchApi();
    }, []);

    const handleSearch = () => {
        console.log(inputValue);
    }

    return(
        <SafeAreaView style={styles.container}>
            <Logo/>

            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combina com você</Text>

            <View style={styles.form}>
                <TextInput
                    placeholder="Digite o nome da comida"
                    style={styles.input}
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
                    onSubmitEditing={handleSearch}
                />
                <TouchableOpacity
                    onPress={handleSearch}
                >
                    <Ionicons name="search" size={28} color="#4CBE6C" />
                </TouchableOpacity>
            </View>

            <FlatList 
                data={foods}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => <FoodList data={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#F3F9F3",
        flex: 1,
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    },
    title: {
        color: "#0e0e0e",
        fontSize: 26,
        fontWeight: "bold"
    },
    form: {
        alignItems: "center",
        backgroundColor: "#FFF",
        borderColor: "#ECECEC",
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 16,
        marginTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
        width: "100%"
    },
    input:{
        height: 54,
        maxWidth: "90%",
        width: "90%"
    }
})