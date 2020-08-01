import styled from 'styled-components/native';
import IconFI from 'react-native-vector-icons/Fontisto';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    colorWhite,
    colorGreenPrimaryRgba,
    colorGreenSecondaryRgba,
    colorGreenSecondary,
    colorBackground2Rgba,
    colorBackground2,
    colorBackground,
    colorGray,
} from '../../components/colors';

export const Container = styled.View`
    flex: 1;
    background-color: green;
`;

export const UserInfoContainer = styled.View`
    flex-direction: column;
    height: ${hp('35%')}px;
    justify-content: flex-end;
    align-items: center;
`;

export const TopBarContent = styled.View`
    height: ${hp('7%')}px;
    width: 100%;
    padding: 0 10px 0 5px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: ${props => wp(props.size + '%') || wp('4.5%')}px;
    font-weight: bold;
    color: ${colorWhite};
    text-align: center;
    margin-bottom: 5px;
`;

export const Text = styled.Text`
    font-size: ${wp('3%')}px;
    color: ${props => props.color || colorGreenSecondary};
    text-align: left ;
`;

export const ButtonMaps = styled.TouchableOpacity`
    height: ${hp('4%')}px;
    width: ${wp('32%')}px;
    margin-top: 10px;
`;

export const ButtonContainer = styled(LinearGradient).attrs({
    colors: [colorGreenPrimaryRgba, colorGreenSecondaryRgba]
})`
    flex: 1;
    flex-direction: row;
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
    padding-left: 5px;
    padding-right: 5px;
`;

export const Icon = styled(IconFI).attrs(props => ({
    name: props.name,
    size: hp(props.size + '%'),
    color: colorGreenSecondary,
}))``;

export const IconFA = styled(Iconfa).attrs(props => ({
    name: props.name,
    size: hp(props.size + '%'),
    color: colorWhite,
}))``;

export const ListSalesContainer = styled(LinearGradient).attrs({
    colors: [colorBackground2Rgba, colorBackground]
})`
    flex: 1;
    margin: ${hp('5%')}px 10px 0 10px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const OfferContainer = styled.TouchableOpacity`
    height: ${hp('12%')}px;
    border-bottom-width: 0.5px;
    border-bottom-color: ${colorGray};
    padding: 0 2px 0 10px;
    flex-direction: row;
    align-items: center;
`;

export const OfferIconContainer = styled(LinearGradient).attrs({
    colors: [colorGreenPrimaryRgba, colorGreenSecondaryRgba]
})`
    height: ${hp('7.5%')}px;
    width: ${hp('7.5%')}px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

export const OfferInfoContent = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
`;

export const OfferItensContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    height: ${hp('5%')}px;
    width: 100%;
`;