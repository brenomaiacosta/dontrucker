import React, { memo, useState, useEffect } from 'react';
import {
    FlatList,
    RefreshControl,
    LogBox,
} from 'react-native';

import {
    Container,
    ContainerAbsolute,
    Header,
    ImageBackground,
    Loading,
} from '../../components/containers';

import { useSales } from '../../context/sales.context';

import CardSale from '../../components/card';
import TopBar from './top-bar';
import Trucker from '../../assets/truck.jpeg';

LogBox.ignoreAllLogs();

const Home = ({ navigation }) => {
    const { users, loadUsers, setUserSelect, setUsers } = useSales();
    const [refreshing, setRefreshing] = useState(true);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            _loadUsers();
        });
    }, [navigation]);

    async function _loadUsers(){
        setRefreshing(true);
        await loadUsers();
        setRefreshing(false);
    }

    const _handleUsers = (user) => {
        setUserSelect(user);
        setUsers(null);
        navigation.navigate('Ofertas');
    }

    return (
        <Container>
            <ImageBackground source={Trucker}>
                <Header />
            </ImageBackground>

            <ContainerAbsolute>
                {refreshing == true ?
                    <Loading />
                :
                    <>
                        <TopBar navigation={navigation} />
                        <FlatList
                            data={users}
                            keyExtractor={item => String(item.id)}
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={_loadUsers}
                                />
                            }
                            renderItem={({ item, index }) => (
                                <CardSale
                                    key={index}
                                    user={item}
                                    onPress={() => _handleUsers(item)}
                                />
                            )}
                        />
                    </>
                }
            </ContainerAbsolute>
        </Container>
    );
}

export default memo(Home);