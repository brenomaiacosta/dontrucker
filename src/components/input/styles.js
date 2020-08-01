import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
    width: 100%;
    height: ${props => props.size || 60}px;
    padding: 0 16px;
    background: #FFFFFF;
    border-radius: 10px;
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: #121A2A;
    font-size: 16px;
`;

export const Icon = styled(FontAwesome5)`
    margin-right: 16px;
`;
