import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { FoodList } from '../../components/foodList';

export const Search = () => {
    const {params} = useRoute();

    const [receipes, setReceipes] = useState([]);

    useEffect(() => {
        const fetchReceipes = async () => {
            const response = await api.get(`/foods?name_like=${params?.name}`);
            setReceipes(response.data);
        }

        fetchReceipes();
    }, [params?.name]);

    return(
        <View style={styles.container}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                style={{marginTop: 14}}
                data={receipes}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => <FoodList data={item}/>}
                ListEmptyComponent={() => <Text style={styles.text}>Nenhum resultado encontrado.</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f3f9ff",
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14,
    },
    text: {
        fontSize: 16
    }
})