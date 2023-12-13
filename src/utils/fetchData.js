import axios from "axios";
import cookies from 'js-cookie';

export const apiheader = {
    headers: { 
        'X-Requested-With': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept-Language': cookies.get('i18next'),
    }
};


export const GetData = async (url, header) => {
    let { data } = await axios.get(url, header);
    return data;
}

export const PostData = async (url, body, header) => {
    let data = await axios.post(url, body, header);
    return data;
}