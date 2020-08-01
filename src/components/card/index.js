import React from 'react'
import { FlatList, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
    Container,
    UserContainer,
    UserInfoContainer,
    CategoriesCard,
    ListCategoriesContainer,
    Image,
    Title,
    IconMap,
    ButtonIconMap,
    Text,
    IconCategorie,
    ButtonCard,
} from './styles';

import StarRating from '../../components/star-rating';
import ImageProfile from '../image-profile';
import { colorGreenPrimary, colorGreenSecondary } from '../colors';

const CardSale = ({user, onPress}) => {

    return (
        <ButtonCard  onPress={() => onPress()}>
            <Container style={{ elevation: 10 }}>
                <UserContainer>
                    <ImageProfile
                        size={7}
                        iconSize={5}
                        image={user.picture}
                    />

                    <UserInfoContainer>
                        <Title>{user.alias}</Title>
                        <StarRating
                            rating={user.rating}
                            align={'flex-start'}
                        />
                    </UserInfoContainer>

                    <ButtonIconMap>
                        <IconMap />
                        <Text>{user.distance} km</Text>
                    </ButtonIconMap>
                </UserContainer>

                <Text>Categorias ofertadas</Text>
                <FlatList
                    horizontal={true}
                    data={user.offerTypeList}
                    keyExtractor={item => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <CategoriesCard
                            key={index}
                            color1={colorGreenPrimary}
                            color2={colorGreenSecondary}
                        >
                            <IconCategorie name={item.icon} />
                        </CategoriesCard>
                    )}
                />
            </Container>
        </ButtonCard>
    );
}

export default CardSale;