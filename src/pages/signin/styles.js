import styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colorWhite, colorBackground } from '../../components/colors';

export const Title = styled.Text`
    font-size: ${hp('4%')}px;
    color: ${colorWhite};
    font-weight: bold;
    font-family: serif;
    text-align: center;
    margin-top: -10px;
`;

export const Image = styled.Image`
    height: ${hp('13%')}px;
    width: ${hp('13%')}px;
    align-self: center;
    margin-top: ${hp('12%')}px;
`;

export const UserContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Text = styled.Text`
    font-size: ${wp('4%')}px;
    color: ${colorWhite};
`;

export const ButtonRegistry = styled.TouchableOpacity`
    height: ${hp('5%')}px;
    align-items: center;
    margin-top: 15px;
`;