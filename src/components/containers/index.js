import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
    colorPrimaryRgba,
    colorSecondary,
    colorBackground,
    colorBackground2,
    colorSecondaryRgba,
    colorPrimary
} from '../colors';

export const Header = styled(LinearGradient).attrs({
    colors: [colorPrimaryRgba, colorSecondaryRgba]
})`
    height: ${props => hp(props.height + '%') || hp('25%')}px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const HeaderSmall = styled(LinearGradient).attrs({
    colors: [colorPrimary, colorSecondary]
})`
    height: ${hp('8%')}px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colorBackground};
`;

export const ContainerAbsolute = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const ImageBackground = styled.ImageBackground.attrs({
    imageStyle: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    }
})`
    height: ${props => hp(props.height + '%') || hp('25%')}px;
    width: ${wp('100%')}px;
    resize-mode: cover;
    justify-content: center;
    background-color: ${colorBackground};
`;

export const Loading = styled.ActivityIndicator.attrs({
    color: colorPrimary,
    size: 40,
})`
    flex: 1;
    align-self: center;
`;