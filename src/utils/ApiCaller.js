import * as Config from './../constants/Config';

export default function callApi(endPoint, method = 'GET', body) {
    if (method === 'GET') {
        return fetch(`${Config.API_URL}/${endPoint}`, {
            method: method
        }).then(res => res.json()).catch(err => console.log(err));
    } else {
        return fetch(`${Config.API_URL}/${endPoint}`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).catch(err => console.log(err));
    }
}