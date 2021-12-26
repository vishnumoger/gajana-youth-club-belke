import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://gajanana-youth-club-belke.herokuapp.com/api/"
})