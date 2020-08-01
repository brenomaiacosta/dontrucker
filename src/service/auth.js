import { Alert } from 'react-native';
import api from '../service/api';
// import qs from 'querystring';

export async function signIn(user, password) {
    let resp = {
        status: null,
        user: null,
    }
 
    await api({
        method: 'post',
        url: '/user/findByUsernameAndPassword',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({
            username: user,
            password: password
        }),
    })
    .then((response) => {
        resp.status = '200';
        resp.user = response.data;
    })
    .catch((error) => {
        console.log(error);
        if (error.code === 'ECONNABORTED') {
            resp.status = '408';
        }
        if (error.response != null) {
            if (error.response.status == '401') {
                resp.status = '401';
            }
            else {
                resp.status = '500';
                alert('Servidor não responde!');
                console.log(error);
            }
        }
    });

    return resp;
}