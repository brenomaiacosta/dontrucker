import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home';
import Sales from '../pages/sales-user';
import SignIn from '../pages/signin';
import MySales from '../pages/my-sales';
import MyOrders from '../pages/my-orders';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <NavigationContainer independent={true}>
        <AppStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AppStack.Screen
                name="SignIn"
                component={SignIn}
            />
            <AppStack.Screen
                name="Home"
                component={Home}
            />
            <AppStack.Screen
                name="Ofertas"
                component={Sales}
            />
            <AppStack.Screen
                name="MySales"
                component={MySales}
            />
            <AppStack.Screen
                name="MyOrders"
                component={MyOrders}
            />
        </AppStack.Navigator>
    </NavigationContainer>
);

export default AppRoutes;