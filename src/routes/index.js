
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator, TouchableOpacity, Alert, Text } from 'react-native'
import { navigationRef } from '../utils/RootNavigation'

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { useDispatch, useSelector } from 'react-redux';
import {store} from './redux/store'
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import { HEADER_BACKGROUND_COLOR, HEADER_TITLE_COLOR, TAB_BAR_ACTIVE_COLOR, TAB_BAR_MENU_COLOR } from '../const/styles';
import { setLogin } from '../redux/actions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator()


function ProfileStackScreens() {
    const dispatch = useDispatch()


    const showLogout = () =>
    Alert.alert(
        "Logout Confirmation",
        "Are you sure you want to log out from this application?",
        [
            {
                text: "NO",
            },
            {
                text: "YES",
                onPress: () => 
                dispatch(setLogin(false))

            },
        ],
        { cancelable: false }
    
    );
    return(

    <ProfileStack.Navigator initialRouteName="Profile" screenOptions={{
        headerTintColor: HEADER_TITLE_COLOR
    }}>
        <ProfileStack.Screen name="ProfileScreen" component={Profile} options={{ 
            title: "PROFILE",
            headerStyle: {
                backgroundColor: HEADER_BACKGROUND_COLOR,
            },
            headerRight: () => (
                <TouchableOpacity onPress={showLogout} style={{paddingRight: 10}}>
                    <MaterialCommunityIcons name="logout" color={TAB_BAR_MENU_COLOR} size={35} />
                </TouchableOpacity>
            )
        }}/>
        
    </ProfileStack.Navigator>
    )
}

const AppView = () => {
    const {isLogin} = useSelector(state => state.userReducer)

   
    return (
        <NavigationContainer ref={navigationRef}>
            {isLogin === false ? (
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            </Stack.Navigator>
            ) : (
            <Tab.Navigator initialRouteName="Home" 
                screenOptions={{
                    headerTintColor: HEADER_TITLE_COLOR, // warna header
                    tabBarStyle: {
                        backgroundColor: HEADER_BACKGROUND_COLOR // background color tab barnya
                    },
                    tabBarActiveBackgroundColor: TAB_BAR_ACTIVE_COLOR // background color tab bar active
                }}
                >
                <Tab.Screen 
                    name="Home" 
                    component={Home}
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name="telegram" color={TAB_BAR_MENU_COLOR} size={22} />
                          ),
                        title: "BIDDING",
                        headerShown: false,
                        tabBarLabelStyle: {
                            color: TAB_BAR_MENU_COLOR
                        }
                    }}
                />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileStackScreens} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name="user" color={TAB_BAR_MENU_COLOR} size={20} />
                        ), 
                        title: "PROFILE",
                        headerShown: false,
                        tabBarLabelStyle: {
                            color: TAB_BAR_MENU_COLOR
                        }
                    }}
                />
            </Tab.Navigator>
            )}
        </NavigationContainer>
    )
}


export default AppView;