import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavorites = async (key) => {
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || [];
}

export const saveFavorite = async (key, newItem) => {
    let myFavorites = await getFavorites(key);
    let hasItem = myFavorites.some(item => item.id === newItem.id);
    if(hasItem) return;
    
    myFavorites.push(newItem);
    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
}

export const removeFavorite = async (id) => {
    let receipes = await getFavorites("@appreceitas");
    let myFavorites = receipes.filter(item => item.id !== id);
    await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
}

export const isFavorite = async (receipe) => {
    let myReceipes = await getFavorites("@appreceitas");
    const favorite = myReceipes.find(item => item.id === receipe.id);
    
    return favorite ? true : false;
}