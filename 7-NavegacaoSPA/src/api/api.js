import Axios from "axios";

export const api = Axios.create({
    baseURL: 'http://localhost:5000'
})

export const buscaPost = async (url, setDado) =>{
    const retorno = await api.get(url)
    setDado(retorno.data)
}
