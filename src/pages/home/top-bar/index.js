import React, { memo } from 'react';

import {
    Container,
    IconContainer,
    TitleContainer,
    Title,
    SubTitle,
    ButomIcon,
    IconFI
} from './styles';

import { useSales } from '../../../context/sales.context';
import { NavigationContainer } from '@react-navigation/native';

const TopBar = ({navigation}) => {
    const {user} = useSales();

    // const handleSearch = () => {
    //     alert('Efetuar busca...');
    // }

    const openOrders = () => {
        navigation.navigate('MyOrders');
    }

    const openBag = () => {
        navigation.navigate('MySales');
    }

    return (
        <Container>
            <TitleContainer>
                <Title>DonTrucker</Title>
                <SubTitle>{user?.name}</SubTitle>
            </TitleContainer>

            <IconContainer>
                <ButomIcon onPress={openOrders}>
                    <IconFI
                        name={'dollar'}
                    />
                </ButomIcon>

                <ButomIcon onPress={openBag}>
                    <IconFI
                        name={'shopping-bag'}
                    />
                </ButomIcon>
            </IconContainer>
        </Container>
    );
}

export default memo(TopBar);