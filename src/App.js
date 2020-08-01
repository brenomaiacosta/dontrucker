import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, SafeAreaView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import {SalesProvider} from './context/sales.context';

import { colorPrimaryRgba } from './components/colors';
import Routes from './routes';

const App = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor={colorPrimaryRgba} />
            <SalesProvider>
                <Routes />
            </SalesProvider>
        </NavigationContainer>
    </SafeAreaProvider>
);

export default App;