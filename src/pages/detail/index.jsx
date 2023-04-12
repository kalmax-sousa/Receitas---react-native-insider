import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export const Detail = () => {
    const {params} = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => { 
        navigation.setOptions({
            title: params?.data ? params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => console.log("teste")}>
                    <Entypo name="heart" size={28} color="#FF4141" />
                </Pressable>
            )
        })
    }, [navigation, params?.data]);

    return(
        <View style={styles.container}>
            <Text>{params?.data.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "blue"
    }
})