import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/signin';

import { colorBackground } from '../components/colors';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: colorBackground }
        }}
        initialRouteName="SignIn"
    >
        <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
);

export default AuthRoutes;
