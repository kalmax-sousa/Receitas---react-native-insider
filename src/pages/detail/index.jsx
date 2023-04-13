import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, Modal, Share } from 'react-native';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';
import { Ingredients } from '../../components/ingredients';
import { Instructions } from '../../components/instructions';
import { VideoView } from '../../components/video';
import { isFavorite, removeFavorite, saveFavorite } from '../../utils/storage';

export const Detail = () => {
    const {params} = useRoute();
    const navigation = useNavigation();

    const [showVideo, setShowVideo] = useState(false);
    const [favorite, setFavorite] = useState(false);


    useLayoutEffect(() => { 
        const getStatusFavorite = async () => {
            const receipeFavorite = await isFavorite(params?.data);
            setFavorite(receipeFavorite);
        }
        getStatusFavorite();

        navigation.setOptions({
            title: params?.data ? params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => handleFavoriteReceipe(params?.data)}>
                    <Entypo name={favorite ? "heart" : 'heart-outlined'} size={28} color="#FF4141" />
                </Pressable>
            )
        })
    }, [navigation, params?.data, favorite]);

    const handleFavoriteReceipe = async (receipe) => {
        if(favorite){
            await removeFavorite(receipe.id);
            setFavorite(false);
        } else {
            await saveFavorite("@appreceitas", receipe);
            setFavorite(true);
        }
    }

    const handleOpenVideo = () => {
        setShowVideo(true);
    }

    const shareReceipe = async () => {
        try{
            await Share.share({
                url: "https://sujeitoprogramador.com", 
                message: `Receita: ${params?.data.name}\nIngredientes: ${params?.data.total_ingredients}\nVi no app Receita Fácil`
            })
        } catch (error) {

        }
    }

    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 14}}>
            <Pressable onPress={handleOpenVideo}>
                <View style={styles.playIcon}>
                    <AntDesign name="playcircleo" size={44} color="#FAFAFA" />
                </View>
                <Image
                    source={{uri: params?.data.cover}}
                    style={styles.cover}
                />
            </Pressable>

            <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.title}>{params?.data.name}</Text>
                    <Text style={styles.ingredientsText}>Ingredientes ({params?.data.total_ingredients})</Text>
                </View>
                <Pressable onPress={shareReceipe}>
                    <Feather name="share-2" size={24} color="#121212" />
                </Pressable>
            </View>

            {params?.data.ingredients.map(ingredient => (
                <Ingredients key={ingredient.id} data={ingredient} />
            ))}

            <View style={styles.instructionsArea}>
                <Text style={styles.instructionsText}>Modo de Preparo</Text>
                <Feather name="arrow-down" size={24} color="#fff" />
            </View>
            {params?.data.instructions.map((instruction, index) => (
                <Instructions key={instruction.id} index={index} data={instruction} />
            ))}

            <Modal visible={showVideo} animationType='slide'>
                <VideoView
                    handleClose={() => setShowVideo(false)}
                    videoUrl={params?.data.video}
                />
            </Modal>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#F3f9ff",
        paddingEnd: 14,
        paddingStart: 14,
        paddingTop: 14,
    },
    cover: {
        borderRadius: 14,
        height: 200,
        width: "100%",
    },
    playIcon: { 
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        left: 0,
        right: 0,
        position: "absolute",
        top: 0,
        zIndex: 9,
    },
    headerDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
    },
    title:{
        fontSize: 18,
        marginTop: 14,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 4,
    },
    ingredientsText: {
        marginBottom: 14,
        fontSize: 16,
    },
    instructionsArea: {
        backgroundColor: "#4cbe6c",
        flexDirection: "row",
        padding: 8,
        borderRadius: 4,
        marginBottom: 14,
    },
    instructionsText: {
        fontSize: 18,
        fontWeight: 500,
        color: "#FFF",
        marginRight: 8
    }
})