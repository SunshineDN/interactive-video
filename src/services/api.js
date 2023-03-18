import axios from "axios";

export const api = axios.create({
    baseURL: "https://vosce-production.up.railway.app/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
})