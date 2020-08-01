import api from './api';

export async function loadUsers(user) {
    let resp = {
        status: null,
        data: [],
    }
 
    await api({
        method: 'post',
        url: '/offeruser/getbycoordinates',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({
            latitude: user.latitude,
            longitude: user.longitude
        }),
    })
    .then((response) => {
        resp = {
            status: '200',
            data: response.data
        }
    })
    .catch((error) => {
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