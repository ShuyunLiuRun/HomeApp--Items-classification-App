import { message } from 'antd';

/**mode no-cors will make a opqque type of response, 
        *which we couldn't access the information contained in the response 
        *
        * CORS allow cross source(域，端口，协议) data access. But due to security policy, 
        * the browsers prohibit cross source HTTP request initiated within scripts.
        * To solve that, we need to add a response message that contains the proper header.
        */


const request = (url, config) => {
    return fetch(url, config).then((res) => {
        if (!res.ok) {
            // server error
            throw Error('');
        }
        console.log(res);
        return res.json();
        /**
         * an error occured when try to post
         * searched by error syntax, someone said it is because the server
         * does not serving JSON
         */
    }).then((resJson) => {
        if (!resJson) {
            // code error
            throw Error('');
        } else {
            return resJson;
        }
    }).catch((error) => {
        console.log(error);
    });
};

// GET请求
export const get = (url) => {
    return request(url, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
};

// POST请求
export const post = (url, data) => {
    console.table(data);
    return fetch(url, {
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    }).then((res) => {
        if (!res.ok) {
            // server error
            throw Error('');
        }
        console.log("the response after use fetch: "+res);
        return res;
    }).then((resJson) => {
        if (!resJson) {
            // code error
            throw Error('');
        } else {
            return resJson;
        }
    }).catch((error) => {
        console.log(error);
    });
};