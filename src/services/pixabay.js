import axios from 'axios'


const baseURL = 'https://pixabay.com/api/';


export const getImagesByQuery = (query) => {
    
    const params = {
        params:{
            key:'6728037-ebcb9080c79881fc16f7f00a2',
            q:  query.join('').toLowerCase(),
            orientation:'horizontal',
            safesearch:true,
            per_page:100
        }
    }

    return axios.get(baseURL,params);
}

export const getImageById = (id) => {
    
    const params = {
        params:{
            key:'6728037-ebcb9080c79881fc16f7f00a2',
            id:id
        }
    }
    

    return axios.get(baseURL,params);
}