import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import {StackRoutes} from './stackRoutes';
import {Favorite} from '../pages/favorite';

const Tab = createBottomTabNavigator();

export const Routes = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#121212",

                tabBarStyle:{
                    backgroundColor: "#fff",
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen 
                name="HomeTab" 
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        focused
                            ? <Ionicons name="home" color="#000" size={size} />
                            : <Ionicons name="home-outline" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="Favorite" 
                component={Favorite}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        focused
                            ? <Ionicons name="heart" color="#FF4141" size={size} />
                            : <Ionicons name="heart-outline" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}