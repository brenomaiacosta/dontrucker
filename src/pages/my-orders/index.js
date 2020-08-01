import React, { memo } from 'react';
import { StatusBar, FlatList, Alert } from 'react-native';

import {
    Container,
    HeaderSmall,
} from '../../components/containers';
import {
    colorPrimary,
    colorWhite,
} from '../../components/colors';

import {
    TopBarContent,
    ListSalesContainer,
    Title,
    UserInfoContainer,
    ButtonMaps,
    ButtonContainer,
    Icon,
    IconFA,
    Text,
    OfferContainer,
    OfferIconContainer,
    OfferInfoContent,
    OfferItensContainer,
} from './styles';

import { useSales } from '../../context/sales.context';
import ButtonIconFA from '../../components/button-icon-fa';
import ImageProfile from '../../components/image-profile';
import StarRating from '../../components/star-rating';

const MyOrders = ({navigation}) => {
    const { user, userSelect, setUser } = useSales();

    const _handleBack = () => {
        navigation.goBack();
    }

    const _handleRating = () => {
        alert('Votando...');
    }

    function _handleSelect(item) {
        Alert.alert(
            "Oferta selecionada: " + item.name,
            "Confirmar o envio do pedido para: " + userSelect.alias,
            [
                {
                    text: "Cancelar",
                    onPress: () => {},
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => confirmOrder(item)
                }
            ],
            { cancelable: false }
        );
    }

    async function confirmOrder(item) {
        item = {
            ...item,
            provider: {
                id: userSelect.id,
                alias: userSelect.alias
            }
        }

        const u = user;
        u.offers.push(item);

        setUser(u);
        alert('Pedido enviado com sucesso!');
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colorPrimary} />
            <Container>
                <HeaderSmall>
                    <TopBarContent>
                        <ButtonIconFA
                            onPress={_handleBack}
                            name={'chevron-left'}
                            size={6}
                        />

                        <Title>Pedidos de Clientes</Title>

                        <ButtonIconFA
                            
                        />
                    </TopBarContent>
                </HeaderSmall>

                <ListSalesContainer>
                    <FlatList
                        data={user.orders}
                        keyExtractor={item => String(item.id)}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <OfferContainer onPress={() => _handleSelect(item)}>
                                <OfferIconContainer>
                                    <IconFA
                                        name={item.icon}
                                        size={3}
                                    />
                                </OfferIconContainer>
        
                                <OfferInfoContent>
                                    <Title size={4}>{item.name} / {item.provider.alias}</Title>
                                    <OfferItensContainer>
                                        <Text color={'#FFFFFF'}>{item.itens}</Text>
                                    </OfferItensContainer>
                                </OfferInfoContent>
        
                                <ButtonIconFA
                                    name={'chevron-right'}
                                    size={6}
                                />
                            </OfferContainer>
                        )}
                    />
                </ListSalesContainer>
            </Container>
        </>
    );
}

export default memo(MyOrders);