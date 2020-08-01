import styled  from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import IconFI from 'react-native-vector-icons/Fontisto';
import IconFA from 'react-native-vector-icons/FontAwesome5';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
    colorBackground,
    colorBackground2,
    colorWhite,
    colorPrimary,
    colorRed,
    colorGray,
    colorGreenPrimaryRgba,
    colorGreenSecondaryRgba,
    colorGreenPrimary,
    colorGreenSecondary,
 } from '../colors';

export const ButtonCard = styled.TouchableOpacity``;

export const Container = styled(LinearGradient).attrs({
    colors: [colorBackground2, colorBackground]
})`
    flex: 1;
    height: ${hp('20%')}px;
    border-radius: 30px;
    margin: 0 20px ${hp('2.5%')}px 20px;
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
`;

export const Image = styled.Image.attrs(props => ({
    source: props.source
}))`
    height: ${hp('7%')}px;
    width: ${hp('7%')}px;
    border-radius: 100px;
`;

export const UserContainer = styled.View`
    height: ${hp('7%')}px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;
`;

export const UserInfoContainer = styled.View`
    flex: 1;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
`;

export const Title = styled.Text`
    font-size: ${wp('3.5%')}px;
    font-weight: bold;
    color: ${colorWhite};
`;

export const Text = styled.Text`
    font-size: ${props => wp(props.size + '%') || wp('2.5%')}px;
    color: ${colorWhite};
    text-align: ${props => props.align || 'left'};
`;

export const ButtonIconMap = styled.TouchableOpacity`
    width: ${wp('20%')}px;
    flex-direction: row;
    justify-content: space-around;
    height: ${hp('3.5%')}px;
    background-color: ${colorGray};
    border-radius: 50px;
    align-items: center;
    padding: 10px 5px 10px 5px;
`;

export const IconMap = styled(IconFI).attrs({
    name: 'map-marker-alt',
    size: wp('4%'),
    color: colorRed,
})`
    margin-right: 10px;
`;

export const IconCategorie = styled(IconFA).attrs(props => ({
    name: props.name,
    size: hp('1.8%'),
    color: colorWhite,
}))``;

export const CategoriesCard = styled(LinearGradient).attrs(props => ({
    colors: [colorGreenPrimaryRgba, colorGreenSecondaryRgba]
}))`
    height: ${hp('3.4%')}px;
    width: ${wp('10%')}px;
    border-radius: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-right: 5px;
`;