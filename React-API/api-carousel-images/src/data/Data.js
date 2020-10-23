import axios from 'axios';

const baseUrl = 'https://5f8faafc693e730016d7b452.mockapi.io/api/v1/images';


export const getData = async () =>{
    try {
        const res = await axios.get(baseUrl);
        return res.data;
    }catch(err) {
        throw new Error(`${err}`);
    }
}