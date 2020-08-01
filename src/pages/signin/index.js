import React, { memo, useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import {
    Header,
    ImageBackground,
    Container
} from '../../components/containers';

import {
    Title,
    Text,
    Image,
    UserContainer,
    ButtonRegistry,
} from './styles';

import Trucker from '../../assets/truck.jpeg';
import Logo from '../../assets/logo2.png';
import Input from '../../components/input';
import Button from '../../components/button';

import { useAuth } from '../../context/auth.context';
import { colorBackground } from '../../components/colors';

const SignIn = ({ navigation }) => {
    const { signIn } = useAuth();
    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    const handleSignIn = async () => {
        // await signIn(user, password); não deu tempo :-(
        navigation.navigate('Home');
    }

    return (
        <Container>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined }
                enabled
            >
                <ImageBackground
                    height={50}
                    source={Trucker}
                >
                    <Header
                        height={50}
                    >
                        <Image source={Logo} />
                        <Title>DonTrucker</Title>
                    </Header>
                </ImageBackground>
                
                <UserContainer>
                    <Input
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        keyboardType={'email-address'}
                        name="user"
                        icon="user"
                        placeholder="Usuário"
                        onChangeText={(value) => setUser(value)}
                    />

                    <Input
                        secureTextEntry={true}
                        autoCapitalize={'none'}
                        name="password"
                        icon="lock"
                        placeholder="Senha"
                        onChangeText={(value) => setPassword(value)}
                    />

                    <Button onPress={handleSignIn}>Entrar</Button>

                    <ButtonRegistry>
                        <Text>Cadastrar-se</Text>
                    </ButtonRegistry>
                </UserContainer>
            </KeyboardAvoidingView>
        </Container>
    );
}

export default memo(SignIn);