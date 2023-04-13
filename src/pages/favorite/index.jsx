import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import { getFavorites } from '../../utils/storage';
import {useIsFocused} from '@react-navigation/native';
import { FoodList } from '../../components/foodList';

export const Favorite = () => {

    const isFocused = useIsFocused();
    const [receipes, setReceipes] = useState([]);

    useEffect(() => {
        let isActive = true;

        const getReceipes = async () => {
            const results = await getFavorites("@appreceitas");
            if(isActive) setReceipes(results);
        }

        if(isActive) getReceipes();

        return () => {
            isActive = false;
        }

    }, [isFocused]);

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Receitas Favoritas</Text>

            <FlatList 
                showsVerticalScrollIndicator={false}
                style={{marginTop: 14}}
                data={receipes}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => <FoodList data={item}/>}
                ListEmptyComponent={() => <Text style={styles.text}>Você ainda não tem nenhuma receita salva!</Text>}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f3f9ff",
        flex: 1,
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 36,
    },
    title: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 24,
    },
    text: {
        fontSize: 16,
    }
})