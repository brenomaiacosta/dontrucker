import styled from 'styled-components/native';
import StarRating from 'react-native-star-rating';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { colorPrimary } from '../colors';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.align || 'center'};
    width: ${wp('40%')}px;
    margin-top: 5px;
`;

export const Stars = styled(StarRating).attrs({
    maxStars: 5,
    fullStarColor: colorPrimary,
    starSize: hp('2.1%'),
    starStyle: {
        marginRight: 10
    }
})``;

export const Rating = styled.Text`
    font-size: ${wp('3%')}px;
    font-weight: bold;
    color: ${colorPrimary};
`;