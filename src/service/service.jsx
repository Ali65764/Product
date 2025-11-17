import axios from "axios"

const Api = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
})

const request = async(promise) =>{
    try{
        const {data} = await promise
        return data
    }
    catch(err){
        console.log(err);
    }
}

export const GetProducts = () =>{
    return request(Api.get('/'))
}

export const GetSingleProducts = (id) =>{
    return request(Api.get(`/${id}`))
}