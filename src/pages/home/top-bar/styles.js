import styled from 'styled-components/native';
import IconFA from 'react-native-vector-icons/Fontisto';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
    colorWhite
} from '../../../components/colors';

export const Container = styled.View`
    height: ${hp('7%')}px;
    width: 100%;
    margin-bottom: ${hp('4%')}px;
    margin-top: ${hp('2%')}px;
    padding: 0 20px 0 20px;
    flex-direction: row;
    justify-content: space-around;
`;

export const IconContainer = styled.View`
    width: ${wp('25%')}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TitleContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
`;

export const Title = styled.Text`
    font-size: ${wp('6%')}px;
    font-weight: bold;
    color: ${colorWhite};
`;

export const SubTitle = styled.Text`
    font-size: ${wp('3%')}px;
    color: ${colorWhite};
`;

export const IconSearch = styled(IconFA).attrs({
    name: 'search',
    size: wp('4%'),
    color: 'gray',
})``;

export const IconFI = styled(IconFA).attrs(props => ({
    name: props.name,
    size: wp('4%'),
    color: 'gray',
}))``;

export const ButomIcon = styled.TouchableOpacity`
    height: ${hp('5.5%')}px;
    width: ${hp('5.5%')}px;
    background-color: ${colorWhite};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;